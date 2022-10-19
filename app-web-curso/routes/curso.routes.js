const express = require("express");
const router = express.Router();

// importar esquema
const Curso = require("../models/infocurso");

// leer datos de la base de datos
router.get("/", async (req, res, next) => {
  // hace el requerimiento a la base de datos
  const cursoObj = await Curso.find();
  // envia respuesta desde el servidor al navegador
  res.json(cursoObj);
});

// consulta de datos por lugar
router.get("/lugar/:lugar", async (req, res, next) => {
  // http://localhost:5000/api/curso/lugar/Universidad
  const lugar = req.params.lugar;
  console.log(lugar);
  const cursoObj = await Curso.find({
    lugar: lugar,
  }).sort({ $natural: -1 });
  res.json(cursoObj);
});

// consulta del ultimo dato
router.get("/ultimo/lugar/:lugar", async (req, res, next) => {
  const lugar = req.params.lugar;
  const cursoObj = await Curso.find({ lugar: lugar })
    .limit(1)
    .sort({ $natural: -1 });
  res.json(cursoObj);
});

// consulta de datos por lugar
router.get("/lugar/:lugar/temp/:tempe", async (req, res, next) => {
  // http://localhost:5000/api/curso/lugar/Universidad
  const lugar = req.params.lugar;
  const temp = req.params.tempe;
  console.log(lugar);
  const cursoObj = await Curso.find({
    lugar: lugar,
    temperatura: { $gt: temp },
  }).sort({ $natural: -1 });
  res.json(cursoObj);
});

// guardar datos //{"lugar":"Universidad", "temperatura":10, "humedad": 20, "ruido": [10.3, 11.2]}
router.post("/", async (req, res, next) => {
  const { lugar, temperatura, humedad, ruido } = req.body;
  const cursoObj = new Curso({
    lugar,
    temperatura,
    humedad,
    ruido,
  });
  console.log(cursoObj);
  // Post
  await cursoObj.save();
  res.json({ status: "Dato guardado" });
});

module.exports = router;
