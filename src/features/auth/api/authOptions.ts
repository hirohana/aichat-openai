import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Error_logs } from "src/features/db/sql/dml/models/Error_logs";
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
          } catch (err: any) {
            // TODO user_idとrequest_urlを取得するコードを記述する。
            const errorObj = {
              error_message: err.code ?? null,
              error_code: err.errno ?? null,
              user_id: null,
              request_url: null,
              stack_trace: err.stack ?? null,
              sql_state: err.sqlState ?? null,
            };

            try {
              const errorLogs = new Error_logs();
              await errorLogs.insert(errorObj);
            } catch (error) {
              console.error(error);
            }
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
