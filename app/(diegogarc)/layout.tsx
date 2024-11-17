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

const url = "https://diegogarc.com";
const title = "Diego Garc";

export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  creator: "Diego Garc",
  description: "Direção de fotografia e operação de câmera de cinema",
  keywords: [
    "direção de fotografia",
    "operação de câmera",
    "cinematografia",
    "cinema",
    "Diego Garc",
  ],
  metadataBase: new URL(url),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Diego Garc",
    url,
    title,
    description: "Direção de fotografia e operação de câmera de cinema",
    images: [
      {
        url: `${url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Diego Garc",
      },
    ],
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  }
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
