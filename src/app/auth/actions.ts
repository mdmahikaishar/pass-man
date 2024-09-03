"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AUTH_TOKEN } from "@/constances";
import { db } from "@/libs/db";
import { Hasher } from "@/libs/hasher";
import { Token } from "@/libs/token";

export async function signup(formData: FormData) {
  const password = Hasher.create(formData.get("password") as string);

  const user = await db.user.create({
    data: {
      name: formData.get("username") as string,
      img: "",
      email: formData.get("email") as string,
      hasher: password.type,
      password: password.value,
    },
  });

  const auth_token = Token.create(user.id);

  cookies().set(AUTH_TOKEN, auth_token);
  redirect("/");
}

export async function login(formData: FormData) {
  const user = await db.user.findUnique({
    where: {
      email: formData.get("username") as string,
    }
  });

  if (!user) return redirect("/auth/login");

  const matchPassword = Hasher.check(user.hasher, user.password, formData.get("password") as string);
  
  if (!matchPassword) return redirect("/auth/login");

  const auth_token = Token.create(user.id);

  cookies().set(AUTH_TOKEN, auth_token);
  redirect("/");
}

export async function logout() {
  cookies().set(AUTH_TOKEN, "");
  redirect("/auth/login");
}
