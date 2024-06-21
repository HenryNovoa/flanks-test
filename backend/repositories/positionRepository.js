const { Position, Portfolio, Entity } = require('../models');

class PositionRepository {
    async getAll() {
        return await Position.findAll({
            include: [
                {
                    model: Portfolio,
                    attributes: ['portfolio_id'],
                    include: [
                        {
                            model: Entity,
                            attributes: ['name'],
                        },
                    ],
                },
            ],
        });
    }

    async getById(id) {
        return await Position.findByPk(id, {
            include: [
                {
                    model: Portfolio,
                    attributes: ['portfolio_id'],
                    include: [
                        {
                            model: Entity,
                            attributes: ['name'],
                        },
                    ],
                },
            ],
        });
    }
}

module.exports = new PositionService();
