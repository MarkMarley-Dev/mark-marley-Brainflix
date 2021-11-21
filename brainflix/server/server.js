const express = require("express");
const app = express();
const PORT = 8080 || process.env.PORT;
const router = require("./routes/routes");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/", router);

console.log("hello world");

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}`);
});
