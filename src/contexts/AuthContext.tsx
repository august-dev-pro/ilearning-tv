"use client";
import React, { createContext, useContext, useState } from "react";
import {
  login as fakeLogin,
  register as fakeRegister,
} from "@/services/authService";
import { User } from "@/types/User";

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: {
    email: string;
    name: string;
    password: string;
  }) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const loggedInUser = await fakeLogin(email, password);
    if (loggedInUser) setUser(loggedInUser);
    else throw new Error(`indentifiants incorrects`);
  };

  const register = async (data: {
    email: string;
    name: string;
    password: string;
  }) => {
    const newUser = await fakeRegister(data);
    setUser(newUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
