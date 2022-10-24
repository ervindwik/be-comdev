'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.Roles,{foreignKey:"role_id"});
    }
  }
  Users.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    position: DataTypes.STRING,
    picture: DataTypes.STRING,
    about: DataTypes.STRING,
    googleId: DataTypes.STRING,
    registeredVia: DataTypes.STRING,
    role_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};