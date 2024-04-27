const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/assignment")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Iusse in connecting to the database:", err);
  });
