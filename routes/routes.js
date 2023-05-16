const express = require("express");
const router = express.Router();

// Route 2: /
router.get("/api/all", (req, res) => {
  console.log("routing /");
  const query = "";
  const category = "";
  res.status(200).json({ query, category });
});

// Route 1: /api/current-time
router.get("/api/current-time", (req, res) => {
  const currentTime = new Date().toLocaleString();
  console.log("Retrieving time in server");
  res.status(200).json({ currentTime });
});

// Route 3: /world
router.get("/api/world", (req, res) => {
  console.log("routing /world");
  const query = "";
  const category = "world";
  res.json({ query, category });
});

// Route 4: /politics
router.get("/api/politics", (req, res) => {
  console.log("routing /politics");
  res.json({ query: "", category: "politics" });
});

// Route 5: /news
router.get("/api/news", (req, res) => {
  console.log("routing /news");
  res.json({ query: "", category: "news" });
});

// Route 6: /
router.get("/api/biz", (req, res) => {
  console.log("routing /biz");
  res.json({ query: "", category: "business" });
});

// Route 7: /
router.get("/api/science", (req, res) => {
  console.log("routing /science");
  res.json({ query: "", category: "science" });
});

// Route 8: /tech
router.get("/api/tech", (req, res) => {
  console.log("routing /tech");
  res.json({ query: "", category: "technology" });
});

// Route 9: /entertainment
router.get("/api/entertainment", (req, res) => {
  console.log("routing /entertainment");
  res.json({ query: "", category: "entertainment" });
});

//check if source exists
router.get("/api/check-source/:source", (req, res) => {
  const { source } = req.params;

  const foundSource = newsRatings.find((item) => item.source === source);
  const isSourceFound = foundSource !== undefined;

  res.json({ isSourceFound });
});

// Route 3: handle news API

// Route 4: handle newsRatings.json

// Route 5: ???

// Export the router
module.exports = router;
