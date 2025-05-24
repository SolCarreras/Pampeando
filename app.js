const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const bodyParser = require("body-parser");


//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Pasar sesión a todas las vistas
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'views/main'),
]);

//Rutas
const mainRoutes = require('./routes/mainRoutes');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/', mainRoutes);
app.use('/project', projectRoutes);
app.use('/contact', userRoutes);   

//Servidor 
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor Corriendo en http://localhost:${PORT}`);
});



/* npm install... PARA REQUERIR LAS LIBRERIAS */