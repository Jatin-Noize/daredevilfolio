import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matt Murdock | Attorney & Vigilante",
  description: "Blind lawyer by day. Devil of Hell's Kitchen by night.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
