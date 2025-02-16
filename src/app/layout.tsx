import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../lib/app/styles/index.scss";
import { Header } from "@/widgets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "beats.pad.",
  description:
    "Beats pad helps artists/songwriters write lyrics while syncing them to an instrumental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
