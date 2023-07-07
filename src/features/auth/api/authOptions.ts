import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Users } from "src/features/db/sql/dml/models/Users";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;

        const existUserAndRegisterUser = async () => {
          const userName = u.name as string;
          const users = new Users();

          try {
            const existUser = await users.exist(userName);
            if (existUser) return;
            await users.insert(u);
          } catch (err) {
            console.log(err);
            // errorDB.insert(err, token);
            // alert("エラーが発生しました。時間を置いて再度お試しください。")
            // return null
          }
        };

        existUserAndRegisterUser();

        return {
          ...token,
          id: u.id,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
};
