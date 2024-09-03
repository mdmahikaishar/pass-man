import { IProfile } from "@/types";
import { Token } from "@/libs/token";
import { db } from "@/libs/db";

export async function getProfile(token?: string): Promise<IProfile|null> {
  const tokenData = Token.data(token);

  if (!tokenData) return null;

  return await db.user.findUnique({
    where: {
      id: tokenData,
    },
    select: {
      email: true
    }
  });
}
