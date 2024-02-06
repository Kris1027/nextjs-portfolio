import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kris Portfolio",
  description: "Frontend developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-CNR">{children}</body>
    </html>
  );
}
