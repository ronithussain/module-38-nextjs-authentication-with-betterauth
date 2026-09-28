import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const dbUrl: string = process.env.BETTET_AUTH_DB_URL!; //blank sign ! deyar reason holo oviously value ache...

const client = new MongoClient(dbUrl);
const db = client.db();

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, { client }),
});
