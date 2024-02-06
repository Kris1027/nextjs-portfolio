"use client";
import { DarkModeProvider } from "./dark-mode-context";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}
