import NProgressBar from "@/components/loadings/NProgressBar";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { Session } from "next-auth";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Anchor",
  description: "Golden Anchor is a web application for managing your finances.",
};

export default function RootLayout({ children, session }: { children: ReactNode; session: Session }) {
  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          <NProgressBar color="#BABD92" height={3} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
