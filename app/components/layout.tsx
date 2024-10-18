import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Email Authentication",
  description: "Reasearch Purpose Only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
