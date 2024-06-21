const express = require('express');

const router = express.Router();
const {
  getAllPositions,
  getPositionById,
} = require('../contollers/positionController');

router.get('/positions', getAllPositions);
router.get('/positions/:id', getPositionById);

module.exports = router;
