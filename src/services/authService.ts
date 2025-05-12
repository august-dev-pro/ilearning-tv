import { User } from "@/types/User";

export async function login(
  email: string,
  password: string
): Promise<User | null> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (email === "test@example.com" && password === "password") {
    return {
      id: "1",
      nom: "Doe",
      prenom: "John",
      nomDeChaine: "JohnDoeTV",
      nombreDAbonnes: 1000,
      email,
      avatarUrl: "https://example.com/avatar.jpg",
      description: "Chaîne de démonstration",
      dateInscription: "2023-01-01",
      videosPubliees: 10,
      pays: "France",
    };
  }

  return null;
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
