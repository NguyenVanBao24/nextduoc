import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme_provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import AppProvider from "./app-provider";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Productic ",
  description: "Được tạo bởi Được dev",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Header />
          <AppProvider initTialsessionToken={sessionToken?.value}>{children}</AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
