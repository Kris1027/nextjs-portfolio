import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./theme/theme-provider";

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
      <body className="font-CNR">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
