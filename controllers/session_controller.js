const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
// const { Pool } = require('pg')
// const db = new Pool({
//     database: "goodfoodhunting",
// })
const db = require("./../db")

router.get('/login', (req,res) => {
    res.render('login')
})

router.post('/sessions', (req,res) => {
    //creating a new session/logging ig
    const email = req.body.email
    const password = req.body.password

    //do you even existing the users table

    const sql= `SELECT * FROM users WHERE email = '${email}';`

    db.query(sql, (err,dbRes) => {
        //did we get a record back?
        if (dbRes.rows.length === 0){
            //no good  stay at login page
            res.render('login')
            return
        } 

        const user = dbRes.rows[0]

        bcrypt.compare(password, user.password_digest, (err,result) => {
            if (result) {
                //check your id
                req.session.userId = user.id
                req.session.email = user.email
                res.redirect('/')
            } else {
                res.render('login')
            }
        })
    }) 
})

router.delete('/sessions', (req,res) => {

    req.session.destroy(() => {
        res.redirect('login')
    })

})
module.exports = router