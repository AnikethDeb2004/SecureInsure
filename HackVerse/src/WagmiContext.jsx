import React, { ReactNode, FC } from 'react';
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { infuraProvider } from "./providers/infura";


import MetaMaskConnector from 'some-package-for-MetaMask-connector'; // Assuming this import
import WalletConnectConnector from 'some-package-for-WalletConnect-connector'; // Assuming this import

// Configure chains and providers
const { chains, provider, webSocketProvider } = configureChains([chain.goerli], [
  infuraProvider({ apiKey: "b724e4c39975463fa4a332de025f9df7" }),
]);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

const WagmiProvider = ({ children }) => {
  return (
    <WagmiConfig client={client}>
      {children}
    </WagmiConfig>
  );
};

export default WagmiProvider;
