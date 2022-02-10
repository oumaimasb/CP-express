const express = require("express");
const path = require("path");
const members = require("./Members");
const logger = require("./Middleware/logger");
const app = express();

//init middleware
//app.use(logger);

//static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./Routes/API/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT} `));
