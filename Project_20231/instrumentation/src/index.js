const express = require("express");

const app = express(); // server

// Assignacion de puerto
const port = process.env.PORT || 5000;

// Llamado a la aplicacion
app.use((req, res) => {
    res.send("Hola Mundo, soy Fabian!!!");
});

// Configuracion
app.set("port", port); // toma el puerto configurado y se lo asigna a la app

app.listen(app.get("port"), () => {
    console.log(`Servidor en el puerto ${app.get("port")}`);
});
