import type React from "react";
import type { Metadata } from "next";
import { Big_Shoulders_Display, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-big-shoulders",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "ICISN 2026 - International Conference on Intelligent Systems and Networks",
  description:
    "Fifth International Conference on Intelligent Systems and Networks - Hanoi University of Industry, 22-23 March, 2025",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.variable} ${bigShouldersDisplay.variable}`} style={{ background: "var(--background)" }}>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
