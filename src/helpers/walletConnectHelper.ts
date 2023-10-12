import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { mainnet, arbitrum, base, avalanche, bsc, canto, celo, polygon, eos, fantom, filecoin, mantle, optimism, polygonZkEvm, scroll, zkSync, zora } from 'wagmi/chains'

// 1. Get projectId
const projectId = '5338905bafb3f9bbefbf6a6483c0324c'

// 2. Create wagmiConfig
const metadata = {
    name: 'upayed.me',
    description: 'Simplify Payments, Elevate Experiences.',
    url: 'https://app.upayed.me',
    icons: ['https://app.upayed.me/447dfc44ddab5076de42b8db32c72238.svg']
}

const chains = [mainnet, arbitrum, base, avalanche, bsc, canto, celo, polygon, eos, fantom, filecoin, mantle, optimism, polygonZkEvm, scroll, zkSync, zora]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
// createWeb3Modal({ wagmiConfig, projectId, chains })

export default { wagmiConfig };