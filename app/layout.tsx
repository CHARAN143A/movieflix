import type { Metadata } from "next";
import "./globals.css";

import Providers from "./providers";
import { AuthProvider } from "@/context/AuthContext";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



export const metadata: Metadata = {
  title: "MovieFlix",
  description: "Movie discovery app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white">
        <Providers>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />

              <main className="flex-1">
                {children}
              </main>

              <Footer />
            </div>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}