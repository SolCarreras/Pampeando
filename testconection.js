const { sql, config } = require("./db");

async function testConnection() {
  try {
    const pool = await sql.connect(config);
    console.log("✅ Conexión exitosa a la base de datos");

    // Opcional: ejecuta una consulta de prueba
    const result = await pool.request().query("SELECT GETDATE() AS CurrentDateTime");
    console.log("📅 Fecha/hora desde SQL Server:", result.recordset[0].CurrentDateTime);

    // Cierra la conexión
    await pool.close();
  } catch (err) {
    console.error("❌ Error al conectar con la base de datos:", err);
  }
}

testConnection();
