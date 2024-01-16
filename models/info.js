const { Schema, model } = require('mongoose');

const info = new Schema({
  nombre: String,
  imagen: String,
  informacion: String,
  id: String,
});

module.exports = model('Info', info);
