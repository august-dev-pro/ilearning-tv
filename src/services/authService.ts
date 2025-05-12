import { User } from "@/types/User";

export async function login(
  email: string,
  password: string
): Promise<User | null> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return null;
}

export async function register(data: {
  email: string;
  name: string;
  password: string;
}): Promise<User | null> {
  return null;
}
