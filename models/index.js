const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Publicacion = require('./Publicacion');

// Un usuario tiene muchas publicaciones
Usuario.hasMany(Publicacion, {
  foreignKey: 'usuarioId',
});

// Una publicación pertenece a un usuario
Publicacion.belongsTo(Usuario, {
  foreignKey: 'usuarioId',
});

module.exports = {
  sequelize,
  Usuario,
  Publicacion,
};