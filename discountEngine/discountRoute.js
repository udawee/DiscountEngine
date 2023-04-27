const express = require('express');
const discountController = require('./discountController');
const router = express.Router();

router.post('/applyDiscount', (req, res) => {
    return discountController.applyDiscount(req, res);
});

module.exports = router;
