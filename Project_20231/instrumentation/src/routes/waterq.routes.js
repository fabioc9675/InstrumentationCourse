const express = require("express");
const router = express.Router();

// importar el esquema a usar en este router
const WaterQ = require("../models/waterq");

// lectura de todos los datos de la base de datos
router.get("/", async (req, res, next) => {
    // realizamos un requerimiento a la base de datos
    const waterqObj = await WaterQ.find();
    // enviamos los datos como JSON
    res.json(waterqObj);
});

// postear un dato en la base de datos
router.post("/", async (req, res, next) => {
    // componer el dato a ser guardado en la base de datos
    const { place, station, turbidity, color, conductivity, ph, temperature } =
        req.body; // crea un objeto desde la informacion que venga en el body del req
    const waterqObj = new WaterQ({
        place,
        station,
        turbidity,
        color,
        conductivity,
        ph,
        temperature,
    });

    // Post a la DB
    await waterqObj.save();
    console.log(waterqObj);
    res.json({ status: "Dato guardado exitosamente" });
});

// Actualizar datos desde el id
router.put("/id/:id", async (req, res, next) => {
    // toma los datos desde el body
    const { place, station, turbidity, color, conductivity, ph, temperature } =
        req.body; // crea un objeto desde la informacion que venga en el body del req
    const waterqObj = {
        place,
        station,
        turbidity,
        color,
        conductivity,
        ph,
        temperature,
    };

    await WaterQ.findByIdAndUpdate(req.params.id, waterqObj);
    res.json({ status: "Dato actualizado exitosamente" });
});

// Borrar datos de la base de datos
router.delete("/id/:id", async (req, res, next) => {
    await WaterQ.findByIdAndRemove(req.params.id);
    res.json({ status: "Dato borrado exitosamente" });
});

module.exports = router;
