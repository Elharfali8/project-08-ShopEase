import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "ShopEase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` antialiased`}
      >
        <Providers>
          <Header />
         {children}
        </Providers>
      </body>
    </html>
  );
}
