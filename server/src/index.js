import express from "express";
import words from "./wordBank.js";
import CharsReccuring from "./CharsReccuring.js";

//app.use(expressLayouts);

const app = express();
app.use(express.json());

/* app.set("layout", "../views/layouts/layout.ejs");
app.set("view engine", "ejs");
app.use("/static", express.static("./static")); */

app.get("/", (req, res) => {
  res.status(200);
});

app.get("/api/wordOptions", (req, res) => {
  //TODO: fix fetch to include reccuringChars

  const filteredWords =
    req.query.recurringChars === "true"
      ? words.filter((word) => word.length === parseInt(req.query.wordLength))
      : words.filter(
          (word) => word.length === parseInt(req.query.wordLength) && !CharsReccuring(word)
        );

  res
    .status(200)
    .json(filteredWords[Math.floor(Math.random() * filteredWords.length)]);
});

app.get("/highScores", async (req, res) => {
  res.status(200);
});

app.post("api/submitHighScore", async (req, res) => {
  res.status(200);
});

app.listen(5080, () => {});
