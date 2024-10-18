import type { Metadata } from "next";
import Script from "next/script";

import { ThemeProvider } from "@/components/theme/provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "iTinder",
  description: "Decentrathon App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={process.env.NODE_ENV !== "production"}
    >
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider attribute={"class"} defaultTheme={"dark"}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
