const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to log headers
// app.use((req, res, next) => {
//     console.log('Request headers:', req.headers);
//     next();
// });

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Mock data
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

// Route to add a new user
app.post('/api/users', (req, res) => {
    console.log("POST endpoint called")
    console.log(req.body)
    console.log(req.headers)
    // const newUser = req.body;
    // users.push(newUser);
    // res.status(201).json(newUser);
    res.status(200).json({"msg":"Response from the endpoint"})
});

// Start the server
app.listen(port, () => {
    console.log(`Mock server is running at http://localhost:${port}`);
});
