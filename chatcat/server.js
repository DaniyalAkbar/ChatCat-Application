'use strict';

const express = require("express");
const app = express();
const ChatCat = require('./app');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', ChatCat.router);






app.listen(app.get('port'), ()=>{
    console.log("ChatCat app is running on port:", 3000)
});