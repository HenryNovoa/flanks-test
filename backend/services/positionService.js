const positionRepository = require('../repositories/positionRepository');

class PositionService {
    async getPaginatedPositions({ page, limit }) {
        const offset = (page - 1) * limit
        return positionRepository.getPaginated({ offset, limit, page });
    }

    async getCurrencyDistribution() {
        const positions = await positionRepository.getAll();

        const currencyDistribution = positions.reduce((acc, position) => {
            acc[position.currency] = (acc[position.currency] || 0) + position.balance;
            return acc;
        }, {});


        return Object.keys(currencyDistribution).map(currency => ({
            name: currency,
            value: currencyDistribution[currency],
        }));
    }

    async getEntityDistribution() {
        const positions = await positionRepository.getAll();

        const entityDistribution = positions.reduce((acc, position) => {
            acc[position.Portfolio?.Entity?.name] = (acc[position.Portfolio?.Entity?.name] || 0) + position.balance;
            return acc;
        }, {});

        return Object.keys(entityDistribution).map(entity => ({
            name: entity,
            value: entityDistribution[entity],
        }));
    }

    async getTypeInvestmentDistribution() {
        const positions = await positionRepository.getAll();


        const typeDistribution = positions.reduce((acc, position) => {
            acc[position.type] = (acc[position.type] || 0) + position.balance;
            return acc;
        }, {});

        return Object.keys(typeDistribution).map(type => ({
            name: type,
            value: typeDistribution[type],
        }));
    }

    async getAllPositions() {
        return positionRepository.getAll()
    }

    async getPositionById(id) {
        return positionRepository.getById(id);
    }
}

module.exports = new PositionService();
