import Header from "@/components/navigation/header/Header";
import Footer from "@/components/navigation/footer/Footer";
import { VideosProvider } from "@/contexts/VideosContext";
import { CategoryProvider } from "@/contexts/CategoryContext";
import { AuthProvider } from "@/contexts/AuthContext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AuthProvider>
        <CategoryProvider>
          <VideosProvider>
            <Header />
            {children}
            <Footer />
          </VideosProvider>
        </CategoryProvider>
      </AuthProvider>
    </main>
  );
}
