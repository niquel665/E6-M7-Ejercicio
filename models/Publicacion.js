const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Publicacion extends Model {}

Publicacion.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Publicacion',
    tableName: 'publicaciones',
    timestamps: false,
  }
);

module.exports = Publicacion;