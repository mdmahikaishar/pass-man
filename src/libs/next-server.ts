import { AUTH_TOKEN } from "@/constances";
import { cookies } from "next/headers";

export async function getToken(): Promise<string | undefined> {
  return cookies().get(AUTH_TOKEN)?.value;
}