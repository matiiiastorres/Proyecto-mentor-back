// const express = require('express');
// const router = express.Router();
// const { getInfoById } = require('../controllers/info');

// // Rutas específicas
// router.get('/infoId/:id', getInfoById);

// module.exports = router;

// // Nueva ruta para realizar búsquedas (GET /info/search?q={query})
// // router.get('/search/', searchInfo);
// // Nueva ruta para obtener detalles específicos por ID (GET /info/{id})

const express = require('express');
const router = express.Router();

router.get('/Mati', (req, res) => {
  res.json({
    mensaje: 'app funcionando',
  });
});

module.exports = router;
