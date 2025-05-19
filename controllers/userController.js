//controllers/usertController.js
module.exports = {
    contactForm: (req, res) => {
        res.render('main/contact');
    },

    sendContact: (req, res) => {
        const {name, mail, message} = req.body;
        console.log("Formulario recibido:", name, mail, message);
        // Redirige a Home con un mensaje en la sesión
        req.session.message = '¡Gracias por contactarnos!';
        res.redirect('/');
    }
};
