const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Entity = sequelize.define(
  'Entity',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'entities',
  },
);

module.exports = Entity;
