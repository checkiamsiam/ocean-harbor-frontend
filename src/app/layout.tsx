import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Anchor",
  description: "Golden Anchor is a web application for managing your finances.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
