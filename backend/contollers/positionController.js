const positionService = require('../services/positionService');

const getAllPositions = async (req, res) => {
  try {
    const positions = await positionService.getAllPositions();
    res.json(positions);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

const getPositionById = async (req, res) => {
  try {
    const { id } = req.params;
    const position = await positionService.getPositionById(id);
    if (position) {
      res.json(position);
    } else {
      res.status(404).send('Position not found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllPositions,
  getPositionById,
};
