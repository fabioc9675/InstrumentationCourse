const express = require("express");
const mongoose = require("mongoose");
const app = express(); // server
require("dotenv").config();

// Assignacion de puerto
const URI = process.env.DB_URI;
const port = process.env.PORT || 3000;
const connection = mongoose.connection;

// Uso de CORS para la seguridad de la aplicacion
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json()); // todo dato que viene al servidor es en formato JSON

// Llamado a la aplicacion
// app.use((req, res) => {
//     res.send("<html><body><h1>Hola Mundo</h1></body></html>");
// });

// Routes
app.use("/api/waterq", require("./routes/waterq.routes"));

// Configuracion
app.set("port", port); // toma el puerto configurado y se lo asigna a la app

// Conectar a DB
mongoose
    .connect(URI) // creacion de la conexion a la base de datos
    .then((db) => console.log("Database is connected"))
    .catch((err) => console.error(err));

app.listen(app.get("port"), () => {
    console.log(`Servidor en el puerto ${app.get("port")}`);
});
