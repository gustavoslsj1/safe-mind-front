import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Mente Segura",
  description: "Cuidar e proteger ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="  ">
        <main className="  w-full h-screen  overflow-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
