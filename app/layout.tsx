import type React from "react";
import type { Metadata } from "next";
import { Big_Shoulders_Display, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
    "Sixth International Conference on Intelligent Systems and Networks - East Asia University of Technology (EAUT), 21-22 March, 2026",
  icons: {
    icon: "/logo.png",
  },
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
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
