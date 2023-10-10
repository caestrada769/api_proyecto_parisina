const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema({
  producto: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
});

const Production = mongoose.model('Production', productionSchema);

module.exports = Production;
