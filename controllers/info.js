const Info = require('../models/info');

const createInfo = async (req, res) => {
  const { nombre, informacion, imagen } = req.body;

  try {
    const newInfo = new Info({
      nombre,
      informacion,
      imagen,
    });

    await newInfo.save();

    res.json({
      message: 'Info creada exitosamente',
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

const getInfo = async (req, res) => {
  try {
    const info = await Info.find({});
    res.json({
      info,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

const getInfoById = async (req, res) => {
  const itemId = req.params.id;
  try {
    const info = await Info.findById(itemId);
    res.json({
      info,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

const editInfo = async (req, res) => {
  const { nombre, informacion, imagen, id } = req.body;
  try {
    const infoEditada = await Info.findByIdAndUpdate(id, {
      nombre,
      informacion,
      imagen,
    });
    res.json({
      infoEditada,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

const deleteInfo = async (req, res) => {
  const { id } = req.body;
  try {
    const infoEliminada = await Info.findByIdAndDelete(id);
    res.json({
      message: 'Info eliminada',
      infoEliminada,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

const searchInfo = async (req, res) => {
  const query = req.query.q;
  try {
    const resultados = await Info.find({
      nombre: { $regex: new RegExp(query, 'i') },
    });
    res.json({ resultados });
  } catch (error) {
    res.status(500).json({
      error: 'Error al realizar la búsqueda en el servidor',
    });
  }
};

module.exports = {
  createInfo,
  getInfo,
  getInfoById,
  editInfo,
  deleteInfo,
  searchInfo,
};
