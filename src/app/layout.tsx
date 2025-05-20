import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iLearning TV",
  description: "Votre Web TV éducative",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
