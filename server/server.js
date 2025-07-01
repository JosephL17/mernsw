import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';


dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const PORT = 3000;
const app = express();
app.use(cors()) // enable CORS for all routes
// Middleware to parse JSON bodies
app.use(express.json());


app.get('/api/character', async (req, res) => {
    try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const characters = await collection.find({}).toArray();
    res.json(characters);
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).send('Something went wrong!')
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});