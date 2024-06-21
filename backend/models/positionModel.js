const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Entity = require('./entityModel');
const Portfolio = require('./portfolioModel');

const { CURRENCY_CODE_LENGTH, ISIN_LENGTH } = require('./constants');

const Position = sequelize.define(
  'Position',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    accrued_interest: DataTypes.FLOAT,
    number_of_shares: DataTypes.FLOAT,
    balance: DataTypes.FLOAT,
    capital_gain: DataTypes.FLOAT,
    cost: DataTypes.FLOAT,
    expiration_date: DataTypes.DATE,
    initial_date: DataTypes.DATE,
    interest_rate: DataTypes.FLOAT,
    is_nominal: DataTypes.BOOLEAN,
    isin: DataTypes.STRING(ISIN_LENGTH),
    market: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    valuation_date: DataTypes.DATE,
    rate_to_euro: DataTypes.FLOAT,
    currency: DataTypes.STRING(CURRENCY_CODE_LENGTH),
    portfolio_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Portfolio,
        key: 'id',
      },
    },
  },
  {
    timestamps: false,
    tableName: 'positions',
  },
);

Position.belongsTo(Portfolio, { foreignKey: 'portfolio_id' });

module.exports = Position;
