const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded());

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
const port = 3000;

let data = [];

app.get("/infos", (req, res) => {
  res.json(data);
});

app.post("/data", (req, res) => {
  let rdata = req.body;
  data.push(rdata);
  console.log(data);
  res.status(200).json({ msg: "sucess" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
