export class Token {
  public static create(payload:number): string {
    return `TOKEN_CREATE_${payload}`;
  }
  
  public static data(token?: string): number | null {
    if (!token || !token.includes("TOKEN_CREATE_")) {
      return null;
    }

    return Number(token.replace("TOKEN_CREATE_", ""));
  }
}
