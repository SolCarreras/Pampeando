const express = require('express');
const router = express.Router();
const mainRoutes = require('../controllers/userController');


//como estoy en mi seccion de contacto, no hace falta agregar contacto, especificamente me enviara a contacto ya que con userController estoy definiendo

//http://localhost:8000/contact    ----> con la definicion de contactForm y sendContact son los que usare en userControllers.-


router.get('/', mainRoutes.contactForm);
router.post('/', mainRoutes.sendContact);

module.exports = router;
