const mongoose = require("mongoose");
const { Schema } = mongoose;

// creacion del esquema del modelo en la base de datos
const CursoScheme = new Schema(
  {
    lugar: { type: String, require: true },
    temperatura: { type: Number, default: 0 },
    humedad: { type: Number, default: 0 },
    ruido: { type: Array, default: [0, 0] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("infocurso", CursoScheme);
