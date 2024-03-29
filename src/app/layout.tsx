import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unnati's portfolio",
  description: "Generated by Unnati",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className=" bg-gradient-to-r from-red-300/50 font-serif overflow-x-hidden min-w-screen flex min-h-screen flex-col items-center justify-between">
        <main className="w-full">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}