import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leveragents — AI Leverage for Ecommerce",
  description:
    "The AI operations layer for ecommerce brands. We build the agents, skills, and systems that make your business AI-native.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
