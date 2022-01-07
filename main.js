const express = require("express");
const app = express();
app.use(express.json());

let cors = require("cors");
app.use(cors());

const { selectuser, adduser } = require("./user");

app.get("/users", async (req, res) => {
  const list = await selectuser();
  res.json(list);
});

app.post("/adduser", async (req, res) => {
  const user = req.body;
  await adduser(user);
  res.json({ message: "record added" });
});

app.listen(4000, () => console.log("Connection Successful"));
