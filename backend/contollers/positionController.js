const positionService = require('../services/positionService');

const getPaginatedPositions = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query
        const positions = await positionService.getPaginatedPositions({ page, limit });
        res.json(positions);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

const getCurrencyDistribution = async (req, res) => {
    try {
        const currencyDistribution = await positionService.getCurrencyDistribution()
        res.json(currencyDistribution)
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
}


const getTypeInvestmentDistribution = async (req, res) => {
    try {
        const typeInvestmentDistribution = await positionService.getTypeInvestmentDistribution()
        res.json(typeInvestmentDistribution)
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
}

const getEntityDistribution = async (req, res) => {
    try {
        const typeInvestmentDistribution = await positionService.getEntityDistribution()
        res.json(typeInvestmentDistribution)
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
}

const getAllPositions = async (req, res) => {
    try {
        const positions = await positionService.getAllPositions();
        res.json(positions);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

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
    getPaginatedPositions,
    getCurrencyDistribution,
    getEntityDistribution,
    getTypeInvestmentDistribution
};
