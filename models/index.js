const { DataTypes } = require('sequelize');
const sequelize = require('../persistence/database');

const Item = require('./itemModel.js');
const City = require('./cityModel.js');
const Comment = require('./commentModel.js');

const ItemModel = Item(sequelize, DataTypes);
const CityModel = City(sequelize, DataTypes);
const CommentModel = Comment(sequelize, DataTypes);

CityModel.hasMany(ItemModel, { foreignKey: 'city_id' });
ItemModel.belongsTo(CityModel, { foreignKey: 'city_id' });

CommentModel.belongsTo(ItemModel, { foreignKey: 'item_id' });
ItemModel.hasMany(CommentModel, { foreignKey: 'item_id' });

sequelize.sync();

module.exports = {
  ItemModel,
  CityModel,
  CommentModel,
};
