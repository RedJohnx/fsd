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

// --- QUESTION 4 LOGIC ---

// 1. POST: Accept and store hospital details
app.post('/hospital', async (req, res) => {
    // Convert bed numbers to Integers so math works later!
    const data = {
        hospital_id: req.body.hospital_id,
        name: req.body.name,
        location: req.body.location,
        total_beds: parseInt(req.body.total_beds),
        occupied_beds: parseInt(req.body.occupied_beds)
    };
    
    await db.collection('hospitals').insertOne(data);
    res.redirect('/');
});

// 2. GET: Display hospitals where (Total - Occupied) < 10
app.get('/hospitals/critical', async (req, res) => {
    const data = await db.collection('hospitals').find({
        $expr: { $lt: [{ $subtract: ["$total_beds", "$occupied_beds"] }, 10] }
    }).toArray();
    res.json(data);
});

// 3. POST: Admit a patient (Increment Occupied_Beds)
app.post('/hospital/:id/admit', async (req, res) => {
    await db.collection('hospitals').updateOne(
        { hospital_id: req.params.id },
        { $inc: { occupied_beds: 1 } }
    );
    res.send("Patient Admitted. Bed count updated.");
});