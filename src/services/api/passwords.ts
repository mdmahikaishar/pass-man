import { IPassword, IPasswordPayload } from "@/types";
import {db } from "@/libs/db";
import { Token } from "@/libs/token";

export async function getPasswords(token?: string): Promise<IPassword[]> {
  const tokenData = Token.data(token)!;
  if (!tokenData) return [];
  
  return await db.password.findMany({
    where: {
      userId: tokenData
    }
  })
}

export async function getPassword(id: number, token?: string): Promise<IPassword | null> {
  const tokenData = Token.data(token)!;
  if (!tokenData) return null;

  return await db.password.findUnique({
    where: {
      id,
      userId: tokenData
    }
  })
}