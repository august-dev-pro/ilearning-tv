import { AuthProvider } from "@/contexts/AuthContext";
import "../(site)/globals.css";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main className="min-h-screen flex items-center justify-center">
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
