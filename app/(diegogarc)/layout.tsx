import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diego Garc",
  description: "Site em construção",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={noto.className}>
        <Header /> {children}
      </body>
    </html>
  );
}
