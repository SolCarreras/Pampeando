//controllers/usertController.js
module.exports = {
    contactForm: (req, res) => {
        res.render('main/contact');
    },

    sendContact: (req, res) => {
        const {name, phone, message} = req.body;
        console.log("Formulario recibido:", name, phone, message);
        res.send('¡Gracias por contactarnos!');
    }
};
