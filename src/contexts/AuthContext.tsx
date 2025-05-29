"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import {
  AuthTokens,
  JwtPayload,
  login as loginApi,
  logout as logoutApi,
  register as registerApi,
} from "@/services/authService";
import { User } from "@/types/User";

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: {
    email: string;
    name: string;
    password: string;
  }) => Promise<void>;
  authError: string | null;
  authTokens: AuthTokens | null;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  // Charger le token au démarrage
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setAuthTokens({
        accessToken,
        refreshToken: localStorage.getItem("refreshToken") || "",
      });
      try {
        const decoded = jwtDecode<JwtPayload>(accessToken);
        console.log("decoded token data: ", decoded);

        setUser({
          id: decoded.sub,
          email: decoded.email,
          nom: decoded.nom || "",
          prenom: decoded.prenom || "",
          nomDeChaine: decoded.nomDeChaine || "",
          nombreDAbonnes: 0,
          avatarUrl: "",
          description: "",
          dateInscription: "",
          videosPubliees: 0,
          pays: "",
        });
      } catch {
        setUser(null);
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    setAuthError(null);
    try {
      const tokens = await loginApi(email, password);
      setAuthTokens(tokens);
      localStorage.setItem("accessToken", tokens.accessToken);
      localStorage.setItem("refreshToken", tokens.refreshToken);
      const decoded = jwtDecode<JwtPayload>(tokens.accessToken);
      setUser({
        id: decoded.sub,
        email: decoded.email,
        nom: decoded.nom || "",
        prenom: decoded.prenom || "",
        nomDeChaine: decoded.nomDeChaine || "",
        nombreDAbonnes: 0,
        avatarUrl: "",
        description: "",
        dateInscription: "",
        videosPubliees: 0,
        pays: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setAuthError(err.message || "Erreur lorrs de la connexion");
        throw err;
      }
      setAuthError("Erreur inconnue");
      throw new Error("Erreur inconnue");
    }
  };

  const logout = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return;
    }
    await logoutApi(refreshToken);
    setUser(null);
    setAuthTokens(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const register = async (data: {
    email: string;
    name: string;
    password: string;
  }) => {
    try {
      await registerApi(data);
      setAuthError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setAuthError(err.message || "Erreur lors de l'inscription");
        throw err;
      }
      setAuthError("Erreur inconnue");
      throw new Error("Erreur inconnue");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, authError, authTokens }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
