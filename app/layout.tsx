import type { Metadata } from "next";
import "./globals.css";
import { Dosis } from "next/font/google";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const open_sans = Dosis({
  subsets: ["latin"],
});

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
      <body className={open_sans.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
