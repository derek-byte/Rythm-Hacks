import mongoose from "mongoose";

const uri = process.env.DATABASE_URL;
let connection;

const startDb = async () => {
    if (!connection) connection = await mongoose.connect(uri);
    return connection;
}

export default startDb;