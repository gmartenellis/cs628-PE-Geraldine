import { MongoClient } from "mongodb";
import "../loadEnvironment.mjs";

const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString);

let database;

export async function connectToServer() {

    try {

        await client.connect();

        database = client.db("RecipeFinder");

        console.log("Connected to MongoDB Atlas.");

    } catch (err) {

        console.error(err);

        process.exit();

    }

}

export function getDb() {
    return database;
}