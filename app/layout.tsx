import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme/provider";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Masonry Studio",
  description: "Making the web beautiful, one pixel at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(inter.variable, sora.variable, jetbrainsMono.variable, "bg-background min-h-screen font-sans antialiased")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mx-auto flex-1 overflow-hidden min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
