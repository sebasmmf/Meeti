const Sequelize = require('sequelize');

module.exports = new Sequelize('Meeti', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // define: { (Ocultar columnas de ultima actulizacion y creacion de los registros en la tabla)
    //     timestamps: false 
    // }
    // logging: false (Ocultar informacion en consola sobre sincronizacion de la db)
});