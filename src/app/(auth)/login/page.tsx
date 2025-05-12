"use client";

import SocialLoginButtons from "@/components/ui/SocialLoginButtons";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login(email, password);
    } catch (err: any) {
      setError(
        `Échec de la connexion. Veuillez vérifier vos identifiants: ${err.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <div className="container px-4 sm:px-0 grid items-center justify-center gap-6 md:gap-10">
          <div className="max-w-md xl:min-w-md m-[0_auto] w-full bg-white border border-gray-200 md:border-gray-100 rounded-2xl shadow-lg p-5 sm:p-8 space-y-6">
            <h1 className="mb-6 text-xl md:text-2xl font-[900] text-black text-center border-gray-300 border-b pb-4">
              Connectez-vous
            </h1>
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex items-center flex-wrap gap-2 justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox mr-2" />
                  Se souvenir de moi
                </label>
                <Link href="#" className="text-blue-500 hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer bg-[#0a1b3b] text-white font-semibold py-2 rounded-xl hover:bg-blue-900 transition-all duration-300"
              >
                {loading ? "Connexion..." : "Se connecter"}
              </button>
            </form>
            <p className="text-center flex gap-1 flex-wrap text-[13px] sm:text-sm text-gray-600">
              <span>Pas encore de compte ?</span>
              <Link href="/sign-up" className="text-blue-500 hover:underline">
                Créer un compte
              </Link>
            </p>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">ou</span>
              </div>
            </div>
            <SocialLoginButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
