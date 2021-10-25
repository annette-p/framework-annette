const express = require("express");

const router = express.Router();  // #1 - create a new Express router object, add a new new route to express Router

router.get('/', (req,res)=>{
    res.render('landing/welcome')
})

router.get('/about-us', (req, res) => {
    res.render('landing/about-us')
})

router.get('/contact-us', (req,res)=>{
    res.render('landing/contact-us')
})

module.exports = router; 

