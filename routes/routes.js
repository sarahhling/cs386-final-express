const express = require("express");
const router = express.Router();

// Route 1: /api/current-time
router.get("/api/current-time", (req, res) => {
  const currentTime = new Date().toLocaleString();
  console.log("Retrieving time in server");
  res.status(200).json({ currentTime });
});

// Route 2: /
router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Route 3: handle news API

// Route 4: handle newsRatings.json

// Route 5: ???

// Export the router
module.exports = router;
