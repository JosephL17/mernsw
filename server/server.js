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

app.get('/api/character/:id', async (req, res) => {
    try {
    const { id } = req.params
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const character = await collection.find({'id' : id}).toArray();
    res.json(character);
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).send('Something went wrong!')
    }
})


app.get('/api/planets/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection('planets');
        const planet = await collection.findOne({ 'id' : parseInt(id) });
        res.json(planet);
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).send("ERROR GETTING PLANET");
    }
})




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});