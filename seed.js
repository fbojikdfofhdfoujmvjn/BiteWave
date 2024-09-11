const mongoose = require('mongoose');
const Product = require('../models/Product');

mongoose.connect('mongodb://localhost:27017/bitewave', { useNewUrlParser: true, useUnifiedTopology: true });

const products = [
    {
        name: 'Gaming Mouse',
        price: 49.99,
        description: 'High precision gaming mouse with customizable buttons.',
        imageUrl: 'https://example.com/images/gaming-mouse.jpg'
    },
    {
        name: 'Gaming Keyboard',
        price: 89.99,
        description: 'Mechanical keyboard with RGB backlighting and programmable keys.',
        imageUrl: 'https://example.com/images/gaming-keyboard.jpg'
    }
];

Product.insertMany(products)
    .then(() => {
        console.log('Products added successfully');
        mongoose.connection.close();
    })
    .catch(error => {
        console.error('Error adding products:', error);
        mongoose.connection.close();
    });
