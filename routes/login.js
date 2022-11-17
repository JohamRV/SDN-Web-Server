const express = require('express');
const {resourceView, loginView } = require('../controllers/loginController');
const router = express.Router();
router.get('/resource', resourceView);
router.get('/login', loginView);
module.exports = router;