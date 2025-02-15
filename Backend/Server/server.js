const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Srinu1098@',
  database: 'trip_planner'
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});




// API Route to Add a Trip
app.post("/api/trips", (req, res) => {
    const { userSelection, tripData, email, id } = req.body;

    const query = "INSERT INTO ai_Trips (id, userSelection, tripData, email) VALUES (?, ?, ?, ?)";

    db.query(query, [id, JSON.stringify(userSelection), JSON.stringify(tripData), email], (err, result) => {
        if (err) {
            console.error("Error saving trip:", err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        res.status(201).json({ message: "Trip saved successfully", id });
    });
});


// Start Server
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



