import Header from "@/components/navigation/header/Header";
import Footer from "@/components/navigation/footer/Footer";
import { VideosProvider } from "@/contexts/VideosContext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <VideosProvider>
        <Header />
        {children}
        <Footer />
      </VideosProvider>
    </main>
  );
}
