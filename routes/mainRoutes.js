//routes/mainRoutes

const express = require('express');
const router = express.Router();

//Controlador principal
const mainController = require('../controllers/mainController');


//Ruta de inicio 
router.get('/', mainController.home);
router.get('/about', mainController.about);




module.exports = router;