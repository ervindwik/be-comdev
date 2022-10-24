'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sub_Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sub_Categories.init({
    sub_category_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sub_Categories',
  });
  return Sub_Categories;
};