const { Position, Portfolio, Entity } = require('../models');

class PositionRepository {
    async getAll() {
        return Position.findAll({
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

    async getPaginated({ limit, offset, page }) {
        const { rows, count } = await Position.findAndCountAll({
            include: [
                {
                    model: Portfolio,
                    attributes: ['portfolio_id'],
                    include: [
                        {
                            model: Entity,
                            attributes: ['name']
                        }
                    ]
                }
            ],
            limit,
            offset
        });
        return { positions: rows, total: count, totalPages: Math.ceil(count / limit), currentPage: page };
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

module.exports = new PositionRepository();
