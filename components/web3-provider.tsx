"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { web3Service } from "@/lib/web3-utils"

interface Web3ContextType {
  account: string | null
  isConnected: boolean
  isCorrectNetwork: boolean
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
  switchNetwork: () => Promise<void>
}

const Web3Context = createContext<Web3ContextType>({
  account: null,
  isConnected: false,
  isCorrectNetwork: false,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  switchNetwork: async () => {},
})

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false)

  useEffect(() => {
    checkConnection()
    setupListeners()

    return () => {
      web3Service.removeAllListeners()
    }
  }, [])

  const checkConnection = async () => {
    const accounts = await web3Service.getAccounts()
    if (accounts.length > 0) {
      setAccount(accounts[0])
      setIsConnected(true)
      await checkNetwork()
    }
  }

  const checkNetwork = async () => {
    const chainId = await web3Service.getChainId()
    setIsCorrectNetwork(chainId === "0x1" || chainId === "0x5") // Mock check
  }

  const setupListeners = () => {
    web3Service.onAccountsChanged((accounts) => {
      if (accounts.length > 0) {
        setAccount(accounts[0])
        setIsConnected(true)
      } else {
        setAccount(null)
        setIsConnected(false)
      }
    })

    web3Service.onChainChanged(() => {
      checkNetwork()
    })
  }

  const connectWallet = async () => {
    try {
      const account = await web3Service.connectWallet()
      setAccount(account)
      setIsConnected(true)
      await checkNetwork()
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      throw error
    }
  }

  const disconnectWallet = () => {
    setAccount(null)
    setIsConnected(false)
    setIsCorrectNetwork(false)
  }

  const switchNetwork = async () => {
    try {
      await web3Service.switchToPaseoNetwork()
      await checkNetwork()
    } catch (error) {
      console.error("Failed to switch network:", error)
      throw error
    }
  }

  return (
    <Web3Context.Provider
      value={{
        account,
        isConnected,
        isCorrectNetwork,
        connectWallet,
        disconnectWallet,
        switchNetwork,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  const context = useContext(Web3Context)
  if (!context) {
    throw new Error("useWeb3 must be used within Web3Provider")
  }
  return context
}
