"use client";

import SocialLoginButtons from "@/components/ui/SocialLoginButtons";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function SignUpPage() {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await register({ email, name, password });
    } catch (err: any) {
      setError(`Échec de l'inscription. Veuillez réessayer.: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-5 flex items-center">
      <div className="container px-4 sm:px-0 grid items-center justify-center gap-6 md:gap-10">
        <div className="max-w-md xl:min-w-md m-[0_auto] w-full bg-white border border-gray-200 md:border-gray-100 rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          <h1 className="mb-6 pb-4 text-xl sm:text-2xl font-[900] text-black text-center border-gray-300 border-b">
            Créez votre compte
          </h1>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="fullname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0a1b3b] text-white font-semibold py-2 rounded-xl hover:bg-blue-900 cursor-pointer transition-all duration-200"
            >
              {loading ? "Création en cours..." : "Créer un compte"}
            </button>
          </form>
          <p className="text-center flex gap-1 flex-wrap text-sm text-gray-600">
            <span>Vous avez déjà un compte ?</span>
            <Link href="/login" className="text-blue-500 hover:underline">
              Connectez-vous
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
  );
}
