const express = require("express");

const app = express(); // server
require("dotenv").config();

// Assignacion de puerto
const port = process.env.PORT || 3000;

// Uso de CORS para la seguridad de la aplicacion
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Llamado a la aplicacion
app.use((req, res) => {
    res.send("<html><body><h1>Hola Mundo</h1></body></html>");
});

// Configuracion
app.set("port", port); // toma el puerto configurado y se lo asigna a la app

app.listen(app.get("port"), () => {
    console.log(`Servidor en el puerto ${app.get("port")}`);
});
