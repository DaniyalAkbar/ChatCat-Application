'use strict';
const router = require('express').Router();

router.get('/', (req, res, next) =>{
    //res.sendFile(__dirname + '/views/login.htm')
    res.render('login')
});

router.get('/info', (req, res, next) =>{
    res.send('Hi there')
});

module.exports = {
    router: router
}