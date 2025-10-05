"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useWeb3 } from "@/components/web3-provider"
import { web3Service, CONTRACT_ADDRESS, BLOCK_EXPLORER_BASE } from "@/lib/web3-utils"

export default function TestPage() {
  const { account, isConnected, isCorrectNetwork, connectWallet, switchNetwork } = useWeb3()
  const [donationAmount, setDonationAmount] = useState("")
  const [totalDonations, setTotalDonations] = useState("0")
  const [txHash, setTxHash] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const BLOCK_EXPLORER = `${BLOCK_EXPLORER_BASE}/account/${CONTRACT_ADDRESS}`

  const handleConnectWallet = async () => {
    setIsLoading(true)
    setError(null)
    try {
      await connectWallet()
    } catch (err: any) {
      setError(err.message || "Failed to connect wallet")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSwitchNetwork = async () => {
    setIsLoading(true)
    setError(null)
    try {
      await switchNetwork()
    } catch (err: any) {
      setError(err.message || "Failed to switch network")
    } finally {
      setIsLoading(false)
    }
  }

  const registerDonation = async () => {
    if (!donationAmount || Number.parseFloat(donationAmount) <= 0) {
      setError("Please enter a valid donation amount")
      return
    }

    setIsLoading(true)
    setError(null)
    setTxHash(null)

    try {
      const hash = await web3Service.registerDonation(donationAmount)
      setTxHash(hash)

      // Update total donations
      const newTotal = (Number.parseFloat(totalDonations) + Number.parseFloat(donationAmount)).toFixed(2)
      setTotalDonations(newTotal)

      setDonationAmount("")
    } catch (err: any) {
      setError(err.message || "Transaction failed")
    } finally {
      setIsLoading(false)
    }
  }

  const getTotalDonations = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const total = await web3Service.getTotalDonations()
      setTotalDonations(total)
    } catch (err: any) {
      setError(err.message || "Failed to read contract")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <head>
        <meta name="robots" content="noindex" />
      </head>
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#1A1A1A] hover:text-[#3ECF8E] transition-colors mb-6"
            >
              ← Volver al inicio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 text-balance">
              /test — Luz Verde Blockchain Verification
            </h1>
            <p className="text-lg text-[#1A1A1A]/70 leading-relaxed">
              Interactuá directamente con el contrato en la testnet Paseo de Polkadot.
            </p>
          </div>

          {/* Wallet Connection */}
          <Card className="p-8 mb-8 border-2">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Wallet Connection</h2>

            {!isConnected ? (
              <div className="space-y-4">
                <p className="text-[#1A1A1A]/70">Connect your wallet to interact with the smart contract.</p>
                <Button
                  onClick={handleConnectWallet}
                  disabled={isLoading}
                  className="bg-[#3ECF8E] hover:bg-[#3ECF8E]/90 text-white rounded-xl px-8 py-6 text-lg shadow-lg hover:shadow-[#3ECF8E]/50 transition-all"
                >
                  {isLoading ? "Connecting..." : "Connect Wallet"}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#3ECF8E] animate-pulse" />
                  <span className="text-[#1A1A1A] font-semibold">Wallet Connected</span>
                </div>
                <div className="bg-[#F4F4F4] rounded-lg p-4">
                  <p className="text-sm text-[#1A1A1A]/70 mb-1">Connected Account</p>
                  <p className="font-mono text-sm text-[#1A1A1A] break-all">{account}</p>
                </div>
                <div className="flex items-center gap-2">
                  {isCorrectNetwork ? (
                    <span className="text-[#3ECF8E] text-sm">✓ Connected to Paseo</span>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="text-red-500 text-sm">✗ Wrong network</span>
                      <Button
                        onClick={handleSwitchNetwork}
                        disabled={isLoading}
                        size="sm"
                        variant="outline"
                        className="border-[#3ECF8E] text-[#3ECF8E] hover:bg-[#3ECF8E] hover:text-white bg-transparent"
                      >
                        Switch to Paseo
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Card>

          {/* Contract Address */}
          <Card className="p-8 mb-8 border-2">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Contract Address</h2>
            <a
              href={BLOCK_EXPLORER}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-[#3ECF8E] hover:underline break-all"
            >
              {CONTRACT_ADDRESS}
            </a>
          </Card>

          {/* Write Section */}
          <Card className="p-8 mb-8 border-2 border-[#3ECF8E]/30">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Register Donation (Write)</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Donation Amount (USD)</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  min="0"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="10.00"
                  disabled={!isConnected || isLoading}
                  className="rounded-xl"
                />
              </div>

              <Button
                onClick={registerDonation}
                disabled={!isConnected || isLoading || !donationAmount}
                className="w-full bg-[#3ECF8E] hover:bg-[#3ECF8E]/90 text-white rounded-xl py-6 text-lg shadow-lg hover:shadow-[#3ECF8E]/50 transition-all disabled:opacity-50"
              >
                {isLoading ? "Processing..." : "Register Donation"}
              </Button>

              {txHash && (
                <div className="bg-[#3ECF8E]/10 border-2 border-[#3ECF8E] rounded-lg p-6 space-y-3 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#3ECF8E] flex items-center justify-center text-white">
                      ✓
                    </div>
                    <span className="font-semibold text-[#1A1A1A]">Transaction Successful!</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#1A1A1A]/70">Transaction Hash:</p>
                    <p className="font-mono text-sm text-[#3ECF8E] break-all">{txHash}</p>
                  </div>
                  <div className="pt-2 border-t border-[#3ECF8E]/30">
                    <p className="text-sm text-[#1A1A1A]">
                      <span className="font-semibold">Event Emitted:</span> DonationRegistered
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}
            </div>
          </Card>

          {/* Read Section */}
          <Card className="p-8 border-2">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Total Donations (Read)</h2>

            <div className="space-y-6">
              <div className="bg-[#F4F4F4] rounded-lg p-6 text-center">
                <p className="text-sm text-[#1A1A1A]/70 mb-2">Total Donations On-Chain</p>
                <p className="text-4xl font-bold text-[#3ECF8E]">${totalDonations}</p>
              </div>

              <Button
                onClick={getTotalDonations}
                disabled={!isConnected || isLoading}
                variant="outline"
                className="w-full border-2 border-[#3ECF8E] text-[#3ECF8E] hover:bg-[#3ECF8E] hover:text-white rounded-xl py-6 text-lg transition-all disabled:opacity-50 bg-transparent"
              >
                {isLoading ? "Reading..." : "Refresh Total"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
