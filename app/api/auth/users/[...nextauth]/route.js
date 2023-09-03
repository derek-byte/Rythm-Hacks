import startDb from "@/lib/db";
import UserModel from "@/models/userModel";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                console.log("HERE")

                const {email, password} = credentials;
                await startDb();

                const user = await UserModel.findOne({ email });
                if (!user) throw Error("email/password mismatch!");

                const passwordMatch = await user.comparePassword(password);
                if (!passwordMatch) throw Error("email/password mismatch!");

                return {
                    name: user.name,
                    email: user.email,
                    id: user._id
                };
            }
        })
    ],
    callbacks: {
        jwt(params) {
            console.log("1")
            params.token.id = params.user.id;
            return params.token;
        }, 
        // session({session, token}) {
        //     console.log("2")
        //     if (session.user) {
        //         session.user._id = token.id;
        //     }
        //     return session;
        // }
    }
};

const authHandler = NextAuth(authOptions);

export const GET = authHandler;
export const POST = authHandler;