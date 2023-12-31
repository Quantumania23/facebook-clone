// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// export default NextAuth{
//     providers: [
//         Providers.Facebook({
//             clientId:process.env.FACEBOOK_CLIENT_ID,
//             clientSecret:process.env.FACEBOOK_CLIENT_SECRET,
//         }),
//     ],
// }

import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)