const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define the API endpoint
app.get("/", (req, res) => {
  const response = {
    email: "tanzeglenn@gmail.com", //My Email Address
    current_datetime: new Date().toISOString(), // Dynamically generated datetime
    github_url: "https://github.com/G4EVA-dev/backend-hng-task-0", // GitHub URL
  };
  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
