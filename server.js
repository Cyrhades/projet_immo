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
//      Fake session pour dev pour esquiver browser 
//  refresh qui nous perd la session à chaque re-démarrage
//--------------------------------------------------------------------
if(process.env.APP_ENV === 'dev') {
    app.use((req, res, next) => {
        req.session.user = {
            id: 52,
            email: 'cyrhades76@gmail.com',
            civility: '1',
            lastname: 'Lecomte',
            firstname: 'Cyril'
        };
        next();
    })
}

//--------------------------------------------------------------------
//      transférer les sessions à toutes les vues (templates)
//--------------------------------------------------------------------
app.use((req, res, next) => {
    res.locals.session = req.session;
    res.locals.route = req._parsedUrl.pathname;
    next();
})
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