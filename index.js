// Import required modules
const express = require("express");

// Create an Express application
const app = express();

// Define the port to listen on
const port = process.env.PORT || 5000;
// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server, listening on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
