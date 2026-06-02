import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("here we go again");
});

app.listen(PORT, () => {
  console.log("hey kamaldeen, welcome back");
});
