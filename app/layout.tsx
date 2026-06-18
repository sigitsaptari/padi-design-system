import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PaDi Design System",
  description: "A modern design system built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
