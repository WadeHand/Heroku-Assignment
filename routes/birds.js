const express = require('express');
const router = express.Router();
const createController = require('../controllers/createController');

router.get('/', createController.get_create_render);
router.get('/create', createController.get_create_create);
router.post('/create', createController.post_create_create);
router.get('/congrats', createController.get_create_congrats);

module.exports = router;
