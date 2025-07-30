import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Bricolage_Grotesque({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Joseph Beloved",
  description: "My minimalistic portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
