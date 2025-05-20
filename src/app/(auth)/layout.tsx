import { AuthProvider } from "@/contexts/AuthContext";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <AuthProvider>{children}</AuthProvider>
    </main>
  );
}
