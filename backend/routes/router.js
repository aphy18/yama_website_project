const express = require('express');
const router = express.Router();
const pool = require('./../db');

router.get('/shop', async (req,res) => {
    try {
        const getProducts = await pool.query(
            `SELECT * from product`
          );
          res.json(getProducts.rows);
          console.log('all products -->', getProducts.rows);
    } catch (err) {
        console.log(err)
    }
})

router.get('/product/:id', async (req,res) => {
    try {
        const getProducts = await pool.query(
            `SELECT * from product`
          );
          res.json(getProducts.rows);
          console.log('all products -->', getProducts.rows);
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;