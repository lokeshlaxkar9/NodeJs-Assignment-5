var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081, () => {
  console.log("LISTENING AT PORT 8081");
});

function handleServer(req, res) {
  const url = req.url;
  if (url === "/welcome") {
    res.statusCode = 200;
    res.end("Welcome to Dominos!");
  } else if (url === "/contact") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
  } else {
    res.statusCode = 404;
    res.end(`Error ${res.statusCode} Page Not Found!!`);
  }
}

module.exports = httpServer;
