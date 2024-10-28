import '@rainbow-me/rainbowkit/styles.css';
import {
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import { createClient } from 'viem'
import { coinbaseWallet, metaMaskWallet, rainbowWallet, tokenPocketWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { createConfig, http} from 'wagmi';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [rainbowWallet,tokenPocketWallet, metaMaskWallet],
    },
    {
      groupName: 'Others',
      wallets: [coinbaseWallet, walletConnectWallet],
    },
  ],
  { appName: 'RainbowKit App', projectId: 'fb2a96448f7528ea8fbbfe0ad18da604' },
);
const config = createConfig({
  connectors,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, //
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
});
// const config = getDefaultConfig({
//   appName: 'My RainbowKit App',
//   projectId: 'fb2a96448f7528ea8fbbfe0ad18da604',
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });

export default config