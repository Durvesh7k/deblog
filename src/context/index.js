import { useContext, createContext } from "react";
import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig,useAccount } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
        alchemyProvider({ apiKey: "aGGFuA1-ndGif4rzpUFSAhTFm9i3km9A" }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


const stateContext = createContext();


export const StateContextProvider = ({ children }) => {
    const {address} = useAccount();

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <stateContext.Provider
                value={{
                    address
                }}
                >
                    {children}
                </stateContext.Provider>
            </RainbowKitProvider>
        </WagmiConfig>

    )
}


export const useStateContext = () => useContext(stateContext);
