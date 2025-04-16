const express = require('express');
const router = express.Router();

// Example of a route with a parameter
router.get('/products/:id', (req, res) => {
    const productId = req.params.id; // Ensure this is provided in the request
    // Logic to fetch product by ID
});

module.exports = router;
