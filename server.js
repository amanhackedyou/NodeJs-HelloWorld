const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    let frontEnd = fs.readFileSync("templates/index.html", "utf-8");
    res.end(frontEnd);
});

server.listen(process.env.PORT || 5000, "0.0.0.0", () => {
    console.log("Server Started...");
});
