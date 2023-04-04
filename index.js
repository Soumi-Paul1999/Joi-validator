const express = require("express");

const router = require("./routes/userRoutes");
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",router)

app.get("/test", (req, res) => {
  res.json({ message: "testing" });
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
