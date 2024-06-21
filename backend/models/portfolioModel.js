const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Entity = require('./entityModel');

const Portfolio = sequelize.define(
  'Portfolio',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    portfolio_id: DataTypes.STRING,
    entity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Entity,
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
    tableName: 'portfolios',
  },
);

Portfolio.belongsTo(Entity, { foreignKey: 'entity_id' });

module.exports = Portfolio;
