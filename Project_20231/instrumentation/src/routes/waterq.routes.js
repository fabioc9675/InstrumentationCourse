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

// solicitud de datos por lugar
router.get("/place/:lugar", async (req, res, next) => {
    // raliza el requerimiento de datos por lugar
    // ejemplo: http://localhost:5000/api/waterq/place/Medellin
    const lugar = req.params.lugar;
    const waterqObj = await WaterQ.find({
        place: lugar,
    });
    // respuesta
    res.json(waterqObj);
});

// Solicitar el ultimo dato por lugar
router.get("/last/place/:lug", async (req, res, next) => {
    // raliza el requerimiento de datos por lugar
    // ejemplo: http://localhost:5000/api/waterq/last/place/Medellin
    const lugar = req.params.lug;
    const waterqObj = await WaterQ.find({
        place: lugar,
    })
        .limit(1)
        .sort({ $natural: -1 });
    // respuesta
    res.json(waterqObj);
});

// solicitar valores de un lugar y que ph sea mayor que un valor
router.get("/place/:place/phgt/:ph", async (req, res, next) => {
    const lugar = req.params.place;
    const phgt = req.params.ph;

    const waterqObj = await WaterQ.find({
        place: lugar,
        ph: { $gt: phgt },
    });

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
