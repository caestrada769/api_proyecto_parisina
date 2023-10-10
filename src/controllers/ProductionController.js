const Production = require('../models/Production');

// Obtener todos las categorias
async function getAllProductions(req, res) {
  try {
    const productions = await Production.find();
    res.json(productions);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las ordenes de producción.' });
  }
}

// Obtener una Categoria por ID
async function getProductionById(req, res) {
  const { id } = req.params;
  try {
    const production = await Production.findById(id);
    if (!production) {
      return res.status(404).json({ error: 'Producción no encontrada.' });
    }
    res.json(production);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la producción.' });
  }
}

// Crear una nueva categoria
async function createProduction(req, res) {
  const { producto, area, cantidad, estado } = req.body;
  try {
    const production = new Production({ producto, area, cantidad, estado });
    await production.save();
    res.status(201).json(production);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear una producción.' });
  }
}

// Actualizar un libro por ID
async function updateProduction(req, res) {
  const { id } = req.params;
  const { producto, area, cantidad, estado } = req.body;
  try {
    const production = await Production.findByIdAndUpdate(id, { producto, area, cantidad, estado }, { new: true });
    if (!production) {
      return res.status(404).json({ error: 'Producción no encontrada.' });
    }
    res.json(production);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la producción.' });
  }
}

// Eliminar un libro por ID
async function deleteProduction(req, res) {
  const { id } = req.params;
  try {
    const production = await Production.findByIdAndDelete(id);
    if (!production) {
      return res.status(404).json({ error: 'Producción no encontrada.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la producción.' });
  }
}

module.exports = {
  getAllProductions,
  getProductionById,
  createProduction,
  updateProduction,
  deleteProduction,
};
