import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme";
import { siteConfig } from "@/config/appconfig";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
