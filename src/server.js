const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models/index");


var corsOption = {
  origin: "*",
};
db.sequalize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(cors(corsOption));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to nodejs application." });
});
require('./router/blogsRoute')(app);

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
