const sequelize = require('../config/database');
const Position = require('./positionModel');
const Entity = require('./entityModel');
const Portfolio = require('./portfolioModel');

const initDB = async () => {
  await sequelize.sync();
};

module.exports = {
  Position,
  Entity,
  Portfolio,
  initDB,
};
