import api from "../../lib/api";
import { User } from "../users/user.entity";

//認証に関する「DBとのやり取り（CRUD）」をまとめて管理する場所
export const authRepository = {
  async Signup(
    name: string,
    email: string,
    password: string
  ): Promise<{ user: User; token: string }> {
    const result = await api.post("/auth/signup", {
      name,
      email,
      password,
    });
    const { user, token } = result.data;
    return { user: new User(user), token };
  },
  async Signin(
    email: string,
    password: string
  ): Promise<{ user: User; token: string }> {
    const result = await api.post("/auth/signin", { email, password });
    const { user, token } = result.data;
    return { user: new User(user), token };
  },
  async getCuttentUser(): Promise<User | undefined> {
    const result = await api.get("/auth/me");
    if (result.data == null) return undefined;

    return new User(result.data);
  },
};
