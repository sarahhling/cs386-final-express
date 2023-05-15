const express = require("express");
const path = require("path");
const routes = require("../routes/routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
