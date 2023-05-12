const http = require("http");
const fs = require("fs");
const moment = require("moment");

const christmas = "2023-12-25";
console.log(moment(christmas).format("LL"));

const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  //   console.log("req url", req.url);
  //   console.log("req method", req.method);

  //   res.setHeader("Content-Type", "text/plain");
  //   res.write("Hello World");
  res.setHeader("Content-Type", "text/html");

  let route = "./views/";

  switch (req.url) {
    case "/":
      route += "/index.html";
      res.statusCode = 200;
      break;
    case "/contact":
      route += "contact.html";
      res.statusCode = 200;
      break;
    //   redirect (if url address has been moved)
    case "/contact-us":
      res.statusCode = 301;
      res.setHeader("Location", "/contact");
      break;
    default:
      route += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(route, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`listening on port ${port}`);
});
