import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ClerkProvider} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "ShopEase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={` antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          </Providers>
          <Toaster />
      </body>
      </html>
      </ClerkProvider>
  );
}
