const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Usuario extends Model {}

Usuario.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: false,
  }
);

module.exports = Usuario;