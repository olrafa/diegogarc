import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/navigation/Navigation";
import localFont from "next/font/local";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const helveticaNeue = localFont({
  src: [
    {
      path: "../../assets/fonts/HelveticaNeueLight.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-helvetica-neue",
});

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
      <body
        className={`${helveticaNeue.className} flex flex-col lg:flex-row lg:min-h-screen bg-mainBg text-mainText`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
