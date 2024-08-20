// Import modules
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Middleware
const app = express();
app.use(cors());

// Connect to the database
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'realtordatabase'
});

// Ensure the database connection is established
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Routes
app.get('/', (req, res) => {
    return res.json("from backend side");
});

// Get data from portfolio table
app.get('/portfolio', (req, res) => {
    const sql = "SELECT * FROM portfolio";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

// Get images from portfolio
app.get('/portfolio/image/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT image FROM portfolio WHERE id = ?";
    db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length > 0) {
            const image = results[0].image;
            res.contentType('image/jpeg'); 
            console.log(`Image type: ${typeof image}`);
            console.log(`Image length: ${image.length}`);
            res.send(image);
        } else {
            console.log("cant display image")
            res.status(404).send('Image not found');
        }
    });
});

//delete record from portfolio table
app.delete('/portfolio/:id', (req, res) => {
    const id = req.params.id;  
    const sql = "DELETE FROM portfolio WHERE id=?";
    db.query(sql, [id], (err, data) => {
        if (err) return res.status(500).send(err);
        if (data.affectedRows > 0) {
            return res.status(200).send('Record deleted successfully');
        } else {
            return res.status(404).send('Record not found');
        }
    });
});

// Get data from listings table
app.get('/listings', (req, res) => {
    const sql = "SELECT * FROM listings";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

// Get image from images table
app.get('/images/:image_id', (req, res) => {
    const image_id = req.params.image_id;
    const main_id = req.params.main_id;
    const sql = "SELECT image_id FROM images WHERE main_id = ?";
    db.query(sql, [image_id],[main_id], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length > 0) {
            const image = results[0].image;
            res.contentType('image/jpeg'); 
            res.send(image);
        } else {
            console.log("cant display image")
            res.status(404).send('Image not found');
        }
    });
});

// Server start
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});

