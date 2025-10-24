const express = require('express');
const app = express();

const PORT = 3000;
const host = '127.0.0.1';

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    res.json({ 
        message: 'Data received',
        data: data
    });
});

app.listen(PORT, host, () => {
    console.log(`Server is running at http://${host}:${PORT}`);
});


