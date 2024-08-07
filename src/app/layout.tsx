import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zixen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log("Layout");

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <div className="mt-12">
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
