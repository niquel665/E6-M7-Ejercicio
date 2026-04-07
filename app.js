const { sequelize, Usuario, Publicacion } = require('./models');

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');

    //PARA PRUEBAS
    await sequelize.sync({ force: true });
    console.log('Tablas sincronizadas.');

    const nuevoUsuario = await Usuario.create({
      nombre: 'Carlos',
      email: 'carlos@example.com',
    });

    await nuevoUsuario.createPublicacion({
      titulo: 'Mi primera publicación',
      contenido: 'Este es el contenido de mi post, creado con Sequelize.',
    });

    const usuarioConPublicaciones = await Usuario.findByPk(nuevoUsuario.id, {
      include: Publicacion,
    });

    console.log(JSON.stringify(usuarioConPublicaciones, null, 2));
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
}

main();