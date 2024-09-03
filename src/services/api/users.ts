import { Token } from "@/libs/token";
import { IUser } from "@/types";
import { db } from "@/libs/db";

export async function getUser(token?: string): Promise<IUser | null> {
  const tokenData = Token.data(token);

  if (!tokenData) return null;

  return await db.user.findUnique({
    where: {
      id: tokenData,
    },
  });
}
