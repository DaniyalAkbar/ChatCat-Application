'use strict';
let router = require('express').Router();

module.exports = () =>{
    let routes = {
        'get': {
            '/': (req, res, next) = () =>{
                res.render('login');                    
            },
            '/chat': (req, res, next) = () =>{
                res.render('chatroom');                    
            },
            '/rooms': (req, res, next) = () =>{
                res.render('rooms');                    
            }
        },
        'post':{
            
        }
    }


    let registerRouter = (routes, method)=>{
        for(let key in routes) {
            if(typeof routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array) ){
                registerRouter(routes[key], key);
            }else {
                
            }

        }
    }


}
