"use server";
import { redirect } from "next/navigation";
import { db } from "@/libs/db";
import { Hasher } from "@/libs/hasher";
import { Token } from "@/libs/token";

export async function addPassword(formData: FormData) {
  const pass = Hasher.create(formData.get("password") as string);
  const pin = Hasher.create(formData.get("pin") as string);
  const tokenData = Token.data(formData.get("token") as string);

  if (!tokenData) return redirect("/passwords/add");

  await db.password.create({
    data: {
      name: formData.get("name") as string,
      href: formData.get("href") as string,
      username: formData.get("username") as string,
      hasher: pass.type,
      pass: pass.value,
      pin: pin.value,
      userId: tokenData,
    },
  });

  redirect("/");
}

export async function editPassword(formData: FormData) {
  const pass = Hasher.create(formData.get("password") as string);
  const pin = Hasher.create(formData.get("pin") as string);
  const tokenData = Token.data(formData.get("token") as string);

  if (!tokenData) return redirect("/passwords/add");

  await db.password.update({
    where: {
      id: Number(formData.get("id") as string),
      userId: tokenData,
    },
    data: {
      name: formData.get("name") as string,
      href: formData.get("href") as string,
      username: formData.get("username") as string,
      hasher: pass.type,
      pass: pass.value,
      pin: pin.value,
    },
  });

  redirect("/");
}

export async function deletePassword(passwordId: number) {
  await db.password.delete({
    where: {
      id: passwordId,
    },
  });

  redirect("/");
}
