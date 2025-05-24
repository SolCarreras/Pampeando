/*agrego esta para la conexion de la base con mi proyecto, hago la configuracion.
segundo voy a modificar mi user controllers.*/
require('dotenv').config();

const sql = require("mssql");
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};


const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("✅ Conectado a SQL Server");
    return pool;
  })
  .catch((err) => {
    console.error("❌ Error de conexión a SQL Server:", err);
  });

module.exports = {
  sql,
  poolPromise,
  config,
};


//SQLServerManager16.msc

/*Cuando usás Node.js para conectarte a SQL Server:

Si estás usando el puerto 1433 directo, es mejor escribir:

js

server: "localhost",
port: 1433*/


/*ENVIAR/GUARDAR DATOS DEL FORMULARIO A LA BASE DE DATOS
✅ Estructura actual esperada
Ya tenés:

Una base de datos PampeandoDB.

Una tabla (supongamos Contactos) creada.

Un formulario HTML con campos como nombre, teléfono, mensaje.

Un backend en Node.js conectado correctamente a SQL Server (db.js funcionando).*/

