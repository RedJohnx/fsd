const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = new MongoClient('mongodb://127.0.0.1:27017');
let db;

async function start() {
    await client.connect();
    db = client.db('fsd_lab');
    console.log('Server running at http://localhost:3000');
    app.listen(3000);
}
start();

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// --- QUESTION 2 LOGIC ---

// 1. POST: Accept student details via web form
app.post('/student', async (req, res) => {
    await db.collection('students').insertOne(req.body);
    res.redirect('/'); // Reload page after submit
});

// 2. DELETE: Remove students with Exam_fee = 0 or null
app.delete('/students/unpaid', async (req, res) => {
    await db.collection('students').deleteMany({
        $or: [{ exam_fee: "0" }, { exam_fee: null }] // "0" is string because it comes from HTML
    });
    res.send("Unpaid students deleted");
});

// 3. GET: Helper to view all students (so you can see the result)
app.get('/students', async (req, res) => {
    const data = await db.collection('students').find().toArray();
    res.json(data);
});