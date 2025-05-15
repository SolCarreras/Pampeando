//controllers/usertController.js
module.exports = {
    loginForm: (req, res) => {
        res.render('main/contact');
    },

    login: (req, res) => {
        const {name, phone, message} = req.body;
        console.log(name, phone, message);
        res.render('main/contact', { succesMessage: "¡Mensaje enviado correctamente!"});
    }
};
