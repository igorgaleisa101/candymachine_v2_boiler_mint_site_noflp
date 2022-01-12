import "../styles/App.css";
import React from "react";
import { useMemo } from "react";

import Minter from "../components/Minter";
import Loader from "../components/Loader";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { ThemeProvider, createTheme, createStyles } from "@material-ui/core";

import Layout from "../layouts";
import { Container } from "@material-ui/core";
import LargeHeaderSection from "../components/LargeHeaderSection";
import SectionInfo from "../components/SectionInfo";
import SectionFaq from "../components/SectionFaq";
import SectionRoadmap from "../components/SectionRoadmap";
import SectionTeam from "../components/SectionTeam";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {  
  const [loading, setLoading] = React.useState(true);

  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet(), getMathWallet() ],
    []
  );

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>  
      { loading ? (    
        <Loader />
      ) : (
        <Layout fullWidth> 
          <LargeHeaderSection>
            <div className="card-center">
              <div className="mint-block">                
                <div>
                  <ThemeProvider theme={theme}>
                    <ConnectionProvider endpoint={endpoint}>
                      <WalletProvider wallets={wallets} autoConnect>
                        <WalletDialogProvider>                          
                            <Minter
                              candyMachineId={candyMachineId}                              
                              connection={connection}
                              startDate={startDateSeed}
                              txTimeout={txTimeout}
                              rpcHost={rpcHost}
                            />                          
                        </WalletDialogProvider>
                      </WalletProvider>
                    </ConnectionProvider>
                  </ThemeProvider>
                </div>
              </div>
            </div>
          </LargeHeaderSection> 
          <SectionInfo />
          <SectionRoadmap />
          <SectionFaq />
          <SectionTeam />
        </Layout>
      )
      }
    </>
  );
};

export default App;
