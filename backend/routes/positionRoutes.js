const express = require('express');

const router = express.Router();
const {
    getAllPositions,
    getPositionById,
    getPaginatedPositions,
    getCurrencyDistribution,
    getEntityDistribution,
    getTypeInvestmentDistribution
} = require('../contollers/positionController');

router.get('/positions', getPaginatedPositions);
router.get('/positions/currencyDistribution', getCurrencyDistribution);
router.get('/positions/entityDistribution', getEntityDistribution);
router.get('/positions/typeInvestmentDistribution', getTypeInvestmentDistribution);
router.get('/positions/:id', getPositionById);

module.exports = router;
