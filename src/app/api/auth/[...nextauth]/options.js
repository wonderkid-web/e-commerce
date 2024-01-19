import CredentialsProvider from "next-auth/providers/credentials"

export const options = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username:{
          type: 'text', placeholder: 'Username..'
        },
        password:{
          type:'password', placeholder: 'Password..'
        }
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "test@test.com" };
        
        try {
          const user = {
            username: "test@test.com",
            password: "test",
          };

          // const user = data.data;

          if (
            user.username == credentials.username &&
            user.password == credentials.password
          ) {
            // Any object returned will be saved in `user` property of the JWT
            return user;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        } catch (e) {
          console.log(e.message);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      const now = new Date().getTime() / 1000;
      if (token)
        return {
          ...token,
          ...user,
        };

    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },

  },
  
};
