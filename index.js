const express = require("express");
const path = require("path");
var exphbs = require("express-handlebars");
const { engine } = require("express-handlebars");

// const members = require("./Members");
const logger = require("./Middleware/logger");
const app = express();

//init middleware
app.use(logger);

//handlbars middleware
app.engine(
  "handlebars",
  engine({ extname: ".handlebars", defaultLayout: "main" })
);
app.set("view engine", "handlebars");
app.set("views", "./views");

//body parser middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

//homepageroute
app.get("/", (req, res) => {
  res.render("index");
});

//static folder
app.use(express.static(path.join(__dirname, "public")));

// app.use("/api/members", require("./Routes/API/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT} `));
