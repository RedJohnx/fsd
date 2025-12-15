const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parses HTML forms

// Connect to MongoDB
const client = new MongoClient('mongodb://127.0.0.1:27017');
let db;

async function start() {
    await client.connect();
    db = client.db('fsd_lab');
    console.log('Server running at http://localhost:3000');
    app.listen(3000);
}
start();

// Serve the HTML file
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// --- QUESTION 1 LOGIC ---

// 1. POST: Submit a new complaint
app.post('/complaint', async (req, res) => {
    // Force default status to 'Pending' if not provided
    const data = { ...req.body, status: "Pending" };
    await db.collection('complaints').insertOne(data);
    res.redirect('/'); // Go back to home page after submit
});

// 2. GET: Retrieve all "Pending" complaints
app.get('/complaints/pending', async (req, res) => {
    const data = await db.collection('complaints').find({ status: "Pending" }).toArray();
    res.json(data);
});

// 3. PUT: Update status to "Resolved"
app.put('/complaint/:id', async (req, res) => {
    await db.collection('complaints').updateOne(
        { complaint_id: req.params.id }, 
        { $set: { status: "Resolved" } }
    );
    res.send("Status Updated to Resolved");
});