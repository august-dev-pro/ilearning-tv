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
export interface UserInformations {
  email: string;
  name: string;
  role: string;
  avatarUrl: string;
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
export async function getUserInformations(
  accessToken: string
): Promise<UserInformations> {
  try {
    const response = await fetch(`${PROD_API_AUTH_URL}/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Erreur API: ${response.status} - ${response.statusText}`
      );
    }

    const json = await response.json();
    return json.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error(
      "Erreur inconnue lors de la récupération des infos utilisateur"
    );
  }
}

export async function register(data: {
  email: string;
  name: string;
  password: string;
  isActive: boolean;
}): Promise<string | null> {
  const res = await fetch(`${PROD_API_AUTH_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Erreur de connexion");
  const json = await res.json();

  return json.data;
}
