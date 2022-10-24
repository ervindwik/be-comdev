'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Courses.belongsTo(models.Users,{foreignKey:"user_id"});
      Courses.belongsTo(models.Roles,{foreignKey:"role_id"});
      Courses.belongsTo(models.Categories,{foreignKey:"category_id"});
      Courses.belongsTo(models.Sub_Categories,{foreignKey:"sub_category_id"});
    }
  }
  Courses.init({
    course_name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    picture: DataTypes.STRING,
    video: DataTypes.STRING,
    course_viewer: DataTypes.STRING,
    course_status: DataTypes.BOOLEAN,
    category_id: DataTypes.STRING,
    sub_category_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    role_id: DataTypes.STRING,
    token_transaction: DataTypes.STRING,
    review_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};