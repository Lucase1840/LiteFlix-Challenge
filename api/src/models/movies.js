const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("movies", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
    createdAt: true,
    updatedAt: false
  });
};
