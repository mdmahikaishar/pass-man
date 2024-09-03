import { IAuthRes, ILoginPaylod, IUser, IUserPayload } from "@/types";

export async function signup(payload: IUserPayload): Promise<IAuthRes> {
  return {
    token: "TOKEN"
  };
}

export async function login(payload: ILoginPaylod): Promise<IAuthRes> {
  return {
    token: "TOKEN"
  }
}