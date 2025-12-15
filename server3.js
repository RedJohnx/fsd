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

// --- QUESTION 3 LOGIC ---

// 1. POST: Accept internship data through a web form
app.post('/internship', async (req, res) => {
    // Default status to "On-going" if not provided
    const data = { ...req.body, status: "On-going" };
    await db.collection('internships').insertOne(data);
    res.redirect('/');
});

// 2. GET: Display all students interning at "Infosys"
app.get('/internships/infosys', async (req, res) => {
    const data = await db.collection('internships').find({ company: "Infosys" }).toArray();
    res.json(data);
});

// 3. PUT: Update status to "Completed"
app.put('/internship/:id', async (req, res) => {
    await db.collection('internships').updateOne(
        { student_id: req.params.id },
        { $set: { status: "Completed" } }
    );
    res.send("Internship marked as Completed");
});