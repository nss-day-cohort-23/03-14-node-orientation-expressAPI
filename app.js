const express = require("express");
require("dotenv").config();
const app = express();
const routes = require("./routes/directors");

console.log("Hello from Express");

// middleware stack starts here
app.use(routes);




// TODO: Add error handler

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
