'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      },
      course_viewer: {
        type: Sequelize.STRING
      },
      course_status: {
        type: Sequelize.BOOLEAN
      },
      category_id: {
        type: Sequelize.STRING
      },
      sub_category_id: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      role_id: {
        type: Sequelize.STRING
      },
      token_transaction: {
        type: Sequelize.STRING
      },
      review_id: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  }
};