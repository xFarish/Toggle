const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

if (!fs.existsSync(path.resolve(__dirname, 'style.bundle.css'))) {
    throw new Error('Please run \'npm run build\' first');
}

app.get('/', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/script.js', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'script.js'));
});

app.get('/style.bundle.css', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'style.bundle.css'));
});

app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}/`);
});