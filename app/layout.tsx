import type { Metadata } from "next";
import "./globals.css";
import { Dosis } from "next/font/google";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer";
import { DarkModeProvider } from "./providers/darkMode-Provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={open_sans.className}>
        <DarkModeProvider>
          <Navigation />
          {children}
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
