import React, { useEffect } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Favicon from "../public/favicon.ico";

import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyles from "src/styles/GlobalStyles";
import StyledComponentsRegistry from "lib/registry";
import Provider from "./StoreProvider";
import { Inter } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fitarrito",
  description: "Mexican Food",
  icons: [{ rel: "icon", url: Favicon.src, sizes: "32*32" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${roboto.className} ${inter.className}`}>
        <Provider>
          <StyledComponentsRegistry>
            <GlobalStyles />

            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {/* Make this a flex container */}
              <div className="flex flex-col min-h-screen">
                <Header />

                {/* Make content grow to push footer down */}
                <main className="flex-1 p-12">{children}</main>

                {/* Footer stays at the bottom */}
                <Footer />
              </div>
            </ThemeProvider>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
