import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tiendas Guanaco",
  description: "En construcción",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider></body>
    </html>
  );
}
