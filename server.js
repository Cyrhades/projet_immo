const express = require('express')
const app = express()
const path = require("path")
const session = require('express-session');
const flash = require('express-flash-messages');
require('dotenv').config();

//--------------------------------------------------------------------
//      Ajout du midlleware express session
//--------------------------------------------------------------------
app.use(session({
    secret: process.env.APP_KEY, resave:false, saveUninitialized:false, 
    cookie: {maxAge: 3600000} 
}));

//--------------------------------------------------------------------
//      Ajout du midlleware express flash messages
//--------------------------------------------------------------------
app.use(flash());

app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

//--------------------------------------------------------------------
//      Configuration templating
//--------------------------------------------------------------------
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));

const router = require('./app/routes.js');
router(app);

//--------------------------------------------------------------------
//     Mise en écoute du serveur HTTP
//--------------------------------------------------------------------
app.listen(process.env.PORT, () => {
    if(process.env.APP_ENV) {
        console.log(`Le serveur HTTP est : http://localhost:${process.env.PORT}`);
    }
})