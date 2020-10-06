const path = require('path');

const express = require('express');

const rootDir = require('../utility/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log('shop.js: ', adminData.products);
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'My Shop',
    path: '/',
    hasProducts: products.length > 0,
    productCSS: true,
    isShopActive: true,
  });
});

module.exports = router;
