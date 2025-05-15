const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');


router.get('/', projectController.list);
router.get('/new', projectController.new);
router.post('/', projectController.create);


module.exports = router;