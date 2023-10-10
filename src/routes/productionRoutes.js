const express = require('express');
const router = express.Router();
const ProductionController = require('../controllers/ProductionController');

// Rutas para libros
router.get('/production', ProductionController.getAllProductions);
router.get('/production/:id', ProductionController.getProductionById);
router.post('/production', ProductionController.createProduction);
router.put('/production/:id', ProductionController.updateProduction);
router.delete('/production/:id', ProductionController.deleteProduction);

module.exports = router;
