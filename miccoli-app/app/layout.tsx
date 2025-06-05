// import
import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${raleway.className} antialiased`}>
        
        <a href="./">Home</a>
        <a href="/demo1">Demo1</a>
        <a href="/demo2">Demo2</a>
        <hr/>
        {children}

      </body>
    </html>
  );
}
