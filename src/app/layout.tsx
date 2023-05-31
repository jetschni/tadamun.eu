import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Looking for a remote job for 🇩🇪 or 🇪🇺 companies?",
  description:
    "Are you looking for a remote job for a great German 🇩🇪 or European 🇪🇺 company? We help individuals from Egypt to find part & full-time remote jobs in Germany and Europe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-body text-body font-body">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
