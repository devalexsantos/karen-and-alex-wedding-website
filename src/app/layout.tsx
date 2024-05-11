import type { Metadata } from "next";
import { Nunito_Sans, Alex_Brush } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ['400'], display: 'swap', variable: '--font-nunito-sans', });
const alexBrush = Alex_Brush({ subsets: ["latin"], weight: ['400'], display: 'swap', variable: '--font-alex-brush',});

export const metadata: Metadata = {
  title: "Karen e Alex",
  description: "Celebração de União",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunitoSans.variable} ${alexBrush.variable}`}>{children}</body>
    </html>
  );
}
