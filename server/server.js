const express = require("express");
const path = require("path");
const routes = require("../routes/routes");
const config = require("../modules/config");

const PORT = process.env.PORT || config.port;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
