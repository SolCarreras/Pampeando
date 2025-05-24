//controllers/usertController.js

const { poolPromise } = require("../db");
module.exports = {
  contactForm: (req, res) => {
    res.render("main/contact");
  },
  sendContact: async (req, res) => {
    const { name, email, message } = req.body;

    try {
      const pool = await poolPromise;
      await pool
        .request()
        .input("nombre", name)
        .input("email", email)
        .input("mensaje", message)
        .query(
          "INSERT INTO Contactos (nombre, email, mensaje) VALUES (@nombre, @email, @mensaje)"
        );

      req.session.message = "¡Gracias por contactarnos!";
      res.redirect("/");
    } catch (err) {
      console.error("Error al guardar en la base de datos:", err);
      res.status(500).send("Error interno del servidor");
    }
  },
};
