const mongoose = require("mongoose");
const { Schema } = mongoose;

// creacion del esquema de datos para almacenar en la DB
const WaterQualityScheme = new Schema(
    {
        place: { type: String, required: true },
        station: { type: Number, required: true },
        turbidity: { type: Number, default: 0 },
        color: { type: Array, default: [0, 0, 0] },
        conductivity: { type: Number, default: 0 },
        ph: { type: Number, default: 0 },
        temperature: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    }
);

// como usar el esquema como un modelo
module.exports = mongoose.model("waterq", WaterQualityScheme); // el nombre waterq va a ser el nombre de los objetos en la DB
