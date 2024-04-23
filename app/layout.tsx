import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import ThemeProvider from "./theme/theme-provider";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const open_sans = Open_Sans({
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
      <ThemeProvider>
        <body className={open_sans.className}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
