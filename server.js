const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const method_override = require('./middlewares/method_override')
const logger = require('./middlewares/logger')
const expressLayouts = require('express-ejs-layouts')
const dishController = require('./controllers/dish_controller')
const sessionController = require('./controllers/session_controller')
const userController = require('./controllers/user_controller')
const setCurrentUser = require('./middlewares/setCurrentUser')
// const ensureLoggedIn = require('./middlewares/ensure_loggedin')
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const db = require('./db')
const viewHelpers = require('./middlewares/view_helpers')


//http methods -get opost put patch delete\
//CRUD APP 
/*              DATABASE     HTTP
* CREATE         insert      post 
* READ           select      get
* UPDATE         update      put/patch
* DESTROY        delete      delete
//HTTP is stateless
MVC - model view controllers - separation of concerns
resources your're wotrking with - dishes, users, comments
/middleware function has a signature
*/                    //    A
//end point is not here   | 
//END POITN is when the req find the route and have the response 
// parses the raw request body and turn it into an object accessible at req.body
//route is http method + path
//not just the path

//the server.js depends on dish controller and dishcontroller depends on database
//------+//  
//     |
//     |
//     V
app.set('view engine', 'ejs')
//     |
//     |
//     V
app.use(expressLayouts)
//     |
//     |
//     V
app.use(logger)
//     |
//     |
//     V
app.use(express.static('public'))
//     |
//     |
//     V
app.use(express.urlencoded({ extended: true})) //middleware 
//     |
//     |
//     V
app.use(method_override)
//     |
//     |
//     V
app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    resave: false,
    secret: 'keyboard cat'
}))
// app.use(session({
//     secret: process.env.SESSION_SECRET || 'mistyrose',
//     resave: false,
//     saveUninitialized: true,
// }))
//to access in all views a object
app.use(setCurrentUser)
//     |
//     |
//     V
app.use(viewHelpers)
//     |
//     |
//     V
app.use("/", sessionController)
//     |
//     |
//     V
app.use("/", userController)
//     |
//     |
//     V
app.use('/', dishController)
//     |
//     |
//     V
app.listen(port, () => {
    console.log(`Listening in port ${port}`);
})

//since something is a function can be a module and exportb y require
