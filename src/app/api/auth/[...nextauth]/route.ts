import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        login: { label: 'login', type: 'text' },
        password: { label: 'password', type: 'password' }
      },

      async authorize(credentials, req) {
        console.log(credentials)
        const response = await fetch("https://scap-back-production.up.railway.app/auth/login", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            login: credentials?.login,
            password: credentials?.password
          })
        })
        console.log("-----------------");
        console.log(await response.json());
        //console.log(req)
        const user = response
        // if (user && response.ok) {
        //   return user;
        // }

        return null;
      },
    })
  ],
  pages: {
    signIn: '/sign-in'
  }
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST }