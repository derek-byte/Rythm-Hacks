"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function AuthProfileMenu() {
    const {data, status} = useSession();
    const isAuth = status === "authenticated";

    if (isAuth)
        return (
            <p>
                {data?.user?.name}<button onClick={signOut}>Logout</button>
            </p>
        );

    
}