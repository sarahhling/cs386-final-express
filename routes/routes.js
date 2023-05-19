const express = require("express");
const router = express.Router();
const articles = require("../data.js");
var axios = require("axios").default;
require("dotenv").config();

const API_H_KEY = process.env.API_HEADLINES_KEY;
const API_Q_KEY = process.env.API_QUERY_KEY;

// Route 0: gets current time
router.get("/api/current-time", (req, res) => {
  const currentTime = new Date().toLocaleString();
  console.log("Retrieving time in server");
  res.status(200).json({ currentTime });
});

// Route 1: queries from newscatcher API
router.get("/api/getHeadlines", (req, res) => {
  const category = req.query.category || "";
  const query = req.query.query || "";

  var headlineSearch = {
    method: "GET",
    url: "https://api.newscatcherapi.com/v2/latest_headlines",
    params: {
      lang: "en",
      countries: "us",
      topic: req.query.category,
    },
    headers: {
      "x-api-key": API_H_KEY,
    },
  };

  var querySearch = {
    method: "GET",
    url: "https://api.newscatcherapi.com/v2/search",
    params: {
      lang: "en",
      countries: "us",
      topic: req.query.category,
      q: req.query.query,
    },
    headers: {
      "x-api-key": API_Q_KEY,
    },
  };

  var target = query ? querySearch : headlineSearch;

  axios
    .request(target)
    .then(function (response) {
      headlines = response.data.articles;
      console.log("API--> cat: " + category + " query: " + query);
      res.status(200).json({ headlines });
    })
    .catch(function (error) {
      console.error(error);
    });
});

// Route 1b: returns template news for debugging
router.get("/api/getHeadlinesDebug", (req, res) => {
  headlines = articles;
  console.log("returning data for debug");
  res.status(200).json({ headlines });
});

// Route 3: returns query/category values for /all
router.get("/api/all", (req, res) => {
  console.log("routing /");
  const query = "";
  const category = "";
  res.status(200).json({ query, category });
});

// Route 4: returns query/category values for /world
router.get("/api/world", (req, res) => {
  console.log("routing /world");
  const query = "";
  const category = "world";
  res.json({ query, category });
});

// Route 5: returns query/category values for /politics
router.get("/api/politics", (req, res) => {
  console.log("routing /politics");
  res.json({ query: "", category: "politics" });
});

// Route 6: returns query/category values for /news
router.get("/api/news", (req, res) => {
  console.log("routing /news");
  res.json({ query: "", category: "news" });
});

// Route 7: returns query/category values for /biz
router.get("/api/biz", (req, res) => {
  console.log("routing /biz");
  res.json({ query: "", category: "business" });
});

// Route 8: returns query/category values for /science
router.get("/api/science", (req, res) => {
  console.log("routing /science");
  res.json({ query: "", category: "science" });
});

// Route 9: returns query/category values for /tech
router.get("/api/tech", (req, res) => {
  console.log("routing /tech");
  res.json({ query: "", category: "tech" });
});

// Route 10: returns query/category values for /entertainment
router.get("/api/entertainment", (req, res) => {
  console.log("routing /entertainment");
  res.json({ query: "", category: "entertainment" });
});

module.exports = router;
