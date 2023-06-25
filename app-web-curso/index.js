const express = require("express");
const mongoose = require("mongoose");
const app = express(); // server
require("dotenv").config();

// Conexion
const URI = process.env.APP_URI;
const port = process.env.PORT || 5000;

// settings
app.set("port", port);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin.X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

// Routes
app.use("/api/curso", require("./routes/curso.routes"));

// conexion con la base de datos
mongoose
  .connect(URI)
  .then((db) => console.log("Database Conectada"))
  .catch((err) => console.error(err));

// Initialize the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
