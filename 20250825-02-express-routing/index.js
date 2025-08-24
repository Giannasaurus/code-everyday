/* GeeksForGeeks - https://www.geeksforgeeks.org/node-js/routing-in-node-js/
Routing Using Express Framework
Express.js is a minimalist web framework for NodeJS that simplifies routing and server-side application management. With Express, routing becomes simpler and more intuitive.

You don’t need to manually check request methods and URLs; instead, Express provides dedicated methods for handling different HTTP requests, such as app.get(), app.post(), etc.

How It Works:
Install Express using npm install express.
Create an Express app by calling express().
Define routes using Express methods like app.get(), app.post(), etc.
Start the server and listen for incoming requests. */

const express = require('express');
const app = express();

/* For a GET request using the app.get() method: */
app.get('/', (req, res) => {
    res.send('Hello Geek, you requested a GET request');
});

app.get('/about', (req, res) => {
    res.send('Welcome to the About Us page, Geek');
});

app.get('/contact', (req, res) => {
    res.send('Welcome to the Contact Us page, Geek');
});

/* For POST requests use the app.post() method: */
app.post('/', (req, res) => {
    res.send('Hello Geeks, you requested a POST request');
});

app.listen(4000, () => console.log('Server is running on port 4000, Geek'));