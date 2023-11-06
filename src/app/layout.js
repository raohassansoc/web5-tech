"use client";
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Inter } from 'next/font/google'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bsc } from 'wagmi/chains'

const chains = [bsc]
const projectId = 'c6cc849231f0c9770267752c7251f2b5'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Tech Young',
//   description: 'Unlock The Power Of Technology FromTraditional To Web3',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={inter.className}>
           <WagmiConfig config={wagmiConfig}>
              {children}
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </body>
      </LanguageProvider>
    </html>
  )
}
