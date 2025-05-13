import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/navigation/header/Header";
import Footer from "@/components/navigation/footer/Footer";
import { VideosProvider } from "@/contexts/VideosContext";

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
      <body className={` antialiased`}>
        <VideosProvider>
          <Header />
          {children}
          <Footer />
        </VideosProvider>
      </body>
    </html>
  );
}
