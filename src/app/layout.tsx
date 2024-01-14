import NProgressBar from "@/components/loadings/NProgressBar";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { Session } from "next-auth";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocean Harbor",
  description: "Ocean Harbor is a web application for managing your finances.",
};

export default function RootLayout({ children, session }: { children: ReactNode; session: Session }) {
  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          <NProgressBar color="#0077B6" height={3} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
