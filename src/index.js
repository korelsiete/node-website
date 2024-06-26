import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.listen(process.env.PORT || 3000);
console.log(`Server is running on port ${process.env.PORT || 3000}`);
