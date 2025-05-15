const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');


router.get('/list', projectController.list);
router.get('/detail/:id', projectController.detail);



module.exports = router;