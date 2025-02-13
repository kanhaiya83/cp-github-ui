import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css"
import Header from "@/components/Header";
import RainbowProvider from "@/provider/RainbowProvider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ClusterProtocol",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-bs-theme-mode="dark">
      <body
        className={`bg-[#0a0a0a] text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <RainbowProvider>
            <Header />
            {children}
            </RainbowProvider>
          <ToastContainer />
      </body>
    </html>
  );
}
