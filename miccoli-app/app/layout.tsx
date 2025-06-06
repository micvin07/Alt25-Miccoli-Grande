// import
import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import React from 'react';
import NavBar from '@/app/NavBar';
import { LanguageContextProvider } from './store/LanguageContextProvider';

// creazione dei font
const geistSans = Geist({subsets: ["latin"], variable: "--geist-sans"});
const geistMono = Geist_Mono({subsets: ["latin"], variable: "--geist-mono"});
const raleway = Raleway({subsets: ["latin"]});

// creazione dei metadata
export const metadata: Metadata = {
  title: "Miccoli App",
  description: "Benvenuto nell'App di Miccoli",
  openGraph: {
    title: "Miccoli App",
    description: "Benvenuto nell'App di Miccoli"
  },
};

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <body className={raleway.className}>
        <LanguageContextProvider>
          <NavBar />
          {children}
        </LanguageContextProvider>
      </body>
    </html>
  )
}