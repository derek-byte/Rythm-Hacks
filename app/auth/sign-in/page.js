"use client"

import React, { useState } from 'react';

const SignIn = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })
    const { email, password } = userInfo; 

    const handleChange = ({target}) => {
        const { name, value } = target;
        setUserInfo({...userInfo, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("api/auth/users", {
            method: "POST",
            body: JSON.stringify(userInfo)
        }).then((res) => res.json());
        console.log(res);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <form>
                <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Email</label>
                <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Email"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Password</label>
                <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Your Password"
                />
                </div>
                <div className="mt-6">
                <button
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