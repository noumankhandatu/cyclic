// Import required modules
require("dotenv").config();
const express = require("express");

// Create an Express application
const app = express();

// Define the port to listen on
const port = process.env.PORT || 5000;
console.log(process.env.NOUMAN, "process.env.NOUMAN");
console.log(process.env.CYCLIC_APP_NOUMAN, "process.env.NOUMAN");

// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello, World!  process.env.NOUMAN");
  res.send(
    `Hello, World! ${process.env.CYCLIC_APP_NOUMAN}  process.env.NOUMAN ${process.env.NOUMAN}`
  );

  res.send("Hello, World!" + process.env.NOUMAN);
  res.send("Hello, World!" + process.env.CYCLIC_APP_NOUMAN);
});

// Start the server, listening on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
