/* GeeksforGeeks - https://www.geeksforgeeks.org/node-js/routing-in-node-js/
Routing is the process of deciding how a server should respond to different requests made by users. When you visit a website or use an app, your browser sends a request to the server. Routing determines how the server handles these requests based on the URL you visit and the type of request (such as viewing a page, submitting a form, or deleting something).

There are mainly two ways to implement routing in NodeJS

1. Routing with the Native HTTP Module
In NodeJS, routing is done by directly using the built-in http module to create a server that listens for client requests. You manually handle different HTTP methods and URLs. This gives you full control over the request/response cycle, but it requires more boilerplate code and manual handling of request data.

How It Works
You create an HTTP server with http.createServer().
Inside the server's callback function, you inspect the incoming request (req), including its URL (req.url) and HTTP method (req.method).
Based on these parameters, you can determine which functionality to execute (i.e., which route to trigger). */

const http = require('http');
const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const url = req.url;

    if (url === '/about') {
        res.write('Welcome to the About Us page');
    }
    else if (url === '/hello') {
        res.write('Welcome to the Hello page');
    }
    else if (url === '/geeks') {
        res.write('Welcome to the Geeks page');
    }
    else if (url === '/contact') {
        res.write('Welcome to the Contact Us page');
    }
    else {
        res.write('Hello World!');
    }
    res.end();
}).listen(port, () => {
    console.log(`Server start at port: ${port}`);
});