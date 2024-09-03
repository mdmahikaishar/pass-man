type HasherCreateReturn = {
  type: string,
  value: string
}

export class Hasher {
  public static create(payload: string): HasherCreateReturn {
    return {
      type: "hasher-01",
      value: payload.toString()
    }
  }

  public static check(_type: string, hash: string, payload: string): boolean {
    return hash === payload;
  }
}