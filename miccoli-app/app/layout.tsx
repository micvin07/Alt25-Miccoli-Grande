// import
import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";

// creazione dei font
const geistSans = Geist({subsets: ["latin"], variable: "--geist-sans"});
const geistMono = Geist_Mono({subsets: ["latin"], variable: "--geist-mono"});
const raleway = Raleway({subsets: ["latin"], variable: "--raleway"});

export const metadata: Metadata = {
  title: "App di Miccoli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
