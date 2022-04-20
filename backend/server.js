const express = require("express");
const app = express();
require("dotenv").config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth")

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/users", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
