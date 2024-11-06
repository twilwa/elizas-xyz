"use client";

import { WalletEntryPosition } from "@particle-network/auth";
import { Ethereum } from "@particle-network/chains";
import { ModalProvider } from "@particle-network/connect-react-ui";
import "@particle-network/connect-react-ui/dist/index.css";

export function ParticleProvider({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider
      options={{
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "your-project-id",
        clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY || "your-client-key",
        appId: process.env.NEXT_PUBLIC_APP_ID || "your-app-id",
        chains: [Ethereum],
        particleWalletEntry: {
          displayWalletEntry: true,
          defaultWalletEntryPosition: WalletEntryPosition.BR,
          supportChains: [Ethereum],
        },
      }}
      theme="dark"
    >
      {children}
    </ModalProvider>
  );
}