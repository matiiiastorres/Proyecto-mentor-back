const express = require('express');
const router = express.Router();
const {
  createInfo,
  getInfo,
  editInfo,
  deleteInfo,
  getInfoById,
  searchInfo,
} = require('../controllers/info');

// Rutas específicas
router
  .get('/', getInfo) // GET /info
  .post('/', createInfo) // POST /info
  .put('/', editInfo) // PUT /info
  .get('/info/:id', getInfoById)
  .delete('/', deleteInfo) // DELETE /info
  .get('/search', searchInfo);

module.exports = router;

// Nueva ruta para realizar búsquedas (GET /info/search?q={query})
// router.get('/search/', searchInfo);
// Nueva ruta para obtener detalles específicos por ID (GET /info/{id})
