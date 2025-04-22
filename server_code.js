var http = require('http');

async function startServer() {
    const { upperCase } = await import('upper-case');

    http.createServer(function (res, req) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(upperCase("Hello World!"));
        res.end();
    }).listen(3000);

    console.log("Server running at http://localhost:3000/");
}

startServer();