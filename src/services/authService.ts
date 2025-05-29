import { API_URL } from "@/lib/api";
import { User } from "@/types/User";

const PROD_API_AUTH_URL = `${API_URL}/auth`;
// const API_URL = "http://127.0.0.1:3900/auth";

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export interface JwtPayload {
  sub: string;
  email: string;
  nom?: string;
  prenom?: string;
  nomDeChaine?: string;
  // Ajoute d'autres champs si besoin
}

export async function login(
  email: string,
  password: string
): Promise<AuthTokens> {
  const res = await fetch(`${PROD_API_AUTH_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Erreur de connexion");
  const json = await res.json();
  if (json.data?.accessToken && json.data?.refreshToken) {
    return {
      accessToken: json.data.accessToken,
      refreshToken: json.data.refreshToken,
    };
  }
  throw new Error("Identifiants invalides ou réponse inattendue");
}
export async function logout(refreshToken: string): Promise<void> {
  try {
    await fetch(`${PROD_API_AUTH_URL}/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err.message;
    }
    throw new Error("Erreur inconnue lors de la deconnexion");
  }
}

export async function register(data: {
  email: string;
  name: string;
  password: string;
}): Promise<User | null> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id: `${data.name}_${data.password}`,
    nom: data.name.split(" ")[1] || "Nom",
    prenom: data.name.split(" ")[0] || "Prénom",
    nomDeChaine: `${data.name}TV`,
    nombreDAbonnes: 0,
    email: data.email,
    avatarUrl: "https://example.com/avatar.jpg",
    description: "Nouvel utilisateur",
    dateInscription: new Date().toISOString(),
    videosPubliees: 0,
    pays: "France",
  };
}
