const express = require('express');
const router = express.Router();

router.get('/mati', (req, res) => {
  res.json({
    mensaje: 'app funcionando',
  });
});

module.exports = router;
