"use client"

import React, { useState } from 'react';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const [error, setError] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })
    const router = useRouter();

    const { email, password } = userInfo; 

    const handleChange = ({target}) => {
        const { name, value } = target;
        setUserInfo({...userInfo, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password)
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
        console.log(res?.error)
        if (res?.error) return setError(res.error)
        console.log(res?.error)
        // router.replace("/profile");
    };

    return (
        <div className="flex items-center">
            <div className="py-2 rounded w-96">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <form>
                {error ? (
                    <div className="mb-4">
                        <div className="px-5 py-2 text-white bg-red-500 rounded-md">{error}</div>
                    </div>
                ) : null}
                <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Email</label>
                <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Email"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Password</label>
                <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Password"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                </div>
                <div className="mt-6">
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default SignIn;