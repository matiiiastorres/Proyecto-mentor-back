const Info = require('../models/info');

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

module.exports = {
  getInfoById,
};
