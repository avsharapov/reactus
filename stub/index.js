const express = require("express");
const app = express();

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;
