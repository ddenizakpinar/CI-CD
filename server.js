import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("V5");
});

app.listen(PORT, () => console.log("I AM ALIVE"));
