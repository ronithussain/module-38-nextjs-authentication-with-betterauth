import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { Resend } from "resend";
import { userAc } from "better-auth/plugins/admin/access";

const dbUrl: string = process.env.BETTET_AUTH_DB_URL!; //blank sign ! deyar reason holo oviously value ache...

const client = new MongoClient(dbUrl);
const db = client.db("next-auth-db");
// RESEND EMAIL:
const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({user, url, token}, request) => {
      void resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: user.email,
        subject: "Reset your password",
        html: `
        <h4>Reset your password</h4>
        Click the link to reset your password:${url}
        <p>Ignore this email if you haven't requested a password reset </p>
        `,
      });
    },
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      void resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: user.email,
        subject: "Verify your email address",
        html: `
        <h1>Please Verifyed Your Email!</h1>
        Click <a href="${url}">here</a> to verify your email.
        `,
      });
    },

    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 7 * 24 * 3600, // 7 days
  },
  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.BETTER_AUTH_GOOGLE_SECRET as string,
    },
    github: {
      clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.BETTER_AUTH_GITHUB_SECRET as string,
    },
  },
  database: mongodbAdapter(db, { client }),
});
