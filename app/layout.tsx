import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const ubuntu = localFont({
  src: [
    {
      path: "../public/fonts/Ubuntu-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Ubuntu-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Ubuntu-Medium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Prueba Tecnica Frontend - Carlos Bolaño",
  description: "Prueba Tecnica Frontend desarrollada por Carlos Bolaño",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>{children}</body>
    </html>
  );
}
