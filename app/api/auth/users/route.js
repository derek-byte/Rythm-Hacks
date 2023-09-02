import startDb from "@/lib/db";
import UserModel from "@/models/userModel";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const body = await req.json();
    await startDb();

    const oldUser = await UserModel.findOne({email: body.email});

    if (oldUser) {
        return NextResponse.json(
            {error: "email already in use"},
            {status: 422}
        );
    }

    const user = await UserModel.create({...body});

    return NextResponse.json({
        user: {
            id: user._id.toString(),
            email: user.email,
            name: user.name
        }
    })
};