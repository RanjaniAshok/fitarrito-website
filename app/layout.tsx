import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Favicon from "../public/favicon.ico";

import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import GlobalStyles from "src/styles/GlobalStyles";
import StyledComponentsRegistry from "lib/registry";
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className={`${roboto.className} ${inter.className}`}>
        <StyledComponentsRegistry>
          <GlobalStyles />

          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="p-12">
              <Header />
              <div className="absolute top-24">{children}</div>
            </div>

            {/* <Footer /> */}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
