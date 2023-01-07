import mongoose from "mongoose";
import config from "./config";



const {BIBLIOTECA_WEB_HOST, MONGODB_URI } = process.env;
const MONGODB_URL = `mongodb://${BIBLIOTECA_WEB_HOST}/${MONGODB_URI}`;

(async() => {
    const db = await mongoose.connect(config.mongodbURL);
    console.log("DB conectada a:", db.connection.name);
}) ()


