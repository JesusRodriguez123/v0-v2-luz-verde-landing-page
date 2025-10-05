// Web3 utility functions for Luz Verde

export const PASEO_CHAIN_ID = "0x1" // Mock chain ID - replace with actual Paseo testnet chain ID
export const CONTRACT_ADDRESS = "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
export const BLOCK_EXPLORER_BASE = "https://paseo.subscan.io"

export interface DonationEvent {
  donor: string
  amount: string
  timestamp: number
  txHash: string
}

export class Web3Service {
  private provider: any

  constructor() {
    if (typeof window !== "undefined" && window.ethereum) {
      this.provider = window.ethereum
    }
  }

  async connectWallet(): Promise<string> {
    if (!this.provider) {
      throw new Error("No Web3 provider found. Please install MetaMask.")
    }

    try {
      const accounts = await this.provider.request({
        method: "eth_requestAccounts",
      })
      return accounts[0]
    } catch (error: any) {
      throw new Error(error.message || "Failed to connect wallet")
    }
  }

  async getAccounts(): Promise<string[]> {
    if (!this.provider) return []

    try {
      return await this.provider.request({ method: "eth_accounts" })
    } catch (error) {
      console.error("Error getting accounts:", error)
      return []
    }
  }

  async getChainId(): Promise<string> {
    if (!this.provider) return ""

    try {
      return await this.provider.request({ method: "eth_chainId" })
    } catch (error) {
      console.error("Error getting chain ID:", error)
      return ""
    }
  }

  async switchToPaseoNetwork(): Promise<void> {
    if (!this.provider) {
      throw new Error("No Web3 provider found")
    }

    try {
      await this.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: PASEO_CHAIN_ID }],
      })
    } catch (error: any) {
      // If the chain hasn't been added to MetaMask, add it
      if (error.code === 4902) {
        await this.addPaseoNetwork()
      } else {
        throw error
      }
    }
  }

  private async addPaseoNetwork(): Promise<void> {
    if (!this.provider) return

    try {
      await this.provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: PASEO_CHAIN_ID,
            chainName: "Paseo Testnet",
            nativeCurrency: {
              name: "PAS",
              symbol: "PAS",
              decimals: 18,
            },
            rpcUrls: ["https://paseo-rpc.polkadot.io"],
            blockExplorerUrls: [BLOCK_EXPLORER_BASE],
          },
        ],
      })
    } catch (error) {
      console.error("Error adding Paseo network:", error)
      throw error
    }
  }

  async registerDonation(amount: string): Promise<string> {
    if (!this.provider) {
      throw new Error("No Web3 provider found")
    }

    // Mock transaction for hackathon demo
    // In production, this would interact with the actual smart contract
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockTxHash = `0x${Math.random().toString(16).substring(2, 66)}`
        resolve(mockTxHash)
      }, 2000)
    })
  }

  async getTotalDonations(): Promise<string> {
    // Mock reading from contract
    // In production, this would call the smart contract's getTotalDonations() function
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("2350.00")
      }, 1000)
    })
  }

  onAccountsChanged(callback: (accounts: string[]) => void): void {
    if (this.provider) {
      this.provider.on("accountsChanged", callback)
    }
  }

  onChainChanged(callback: (chainId: string) => void): void {
    if (this.provider) {
      this.provider.on("chainChanged", callback)
    }
  }

  removeAllListeners(): void {
    if (this.provider && this.provider.removeListener) {
      this.provider.removeListener("accountsChanged", () => {})
      this.provider.removeListener("chainChanged", () => {})
    }
  }
}

export const web3Service = new Web3Service()
