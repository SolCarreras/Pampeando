//controllers/mainController.js

module.exports = {
    home: (req, res) => {
        res.render('home');
    },
    about: (req, res) => {
        res.render('main/about');
    }

};