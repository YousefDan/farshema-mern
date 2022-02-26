const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { notFound, error } = require("./middlewares/error");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Contected To MongoDB..."))
  .catch((err) => console.log("Error", err));

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/products", require("./routes/products"));
app.use("/api/order", require("./routes/order"));
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build", "index.html"));
});

app.use(notFound);
app.use(error);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Server running on port ${port}...`));
