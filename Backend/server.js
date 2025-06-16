import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello World!");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running at https://localhost:${PORT}/`);
});
