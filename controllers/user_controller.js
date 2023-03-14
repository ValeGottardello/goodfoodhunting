const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('./../middlewares/ensure_loggedin')
const db = require("./../db")
const bcrypt = require('bcrypt')

router.get('/users', (req, res) => {
    res.render("sign_up")
})

router.post('/users', (req, res) => {//create a user

    const email = req.body.email
    const plainTextPassword = req.body.password

    //one way function password(pudding) + salt = digested password 
    bcrypt.genSalt(10, (err, salt) => {

        bcrypt.hash(plainTextPassword, salt, (err, digestedPassword) => {
            //the digested password is what we want to save in db
            console.log(digestedPassword);

            const sql = `INSERT INTO users (email, password_digest) VALUES ($1, $2);`

            db.query(sql, [email, digestedPassword], (err, dbRes) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(dbRes.rows);
                    res.redirect('/login')
                }
            })
        })
    })
})
router.get('/users/:email/edit', (req, res) => {
    const sql = `SELECT * FROM users WHERE email = $1;`
    // console.log(`${req.params.id}`)

    db.query(sql, [req.params.email], (err, dbRes) => {
        if (err) {
            console.log(err);
            // process.exit(1)
        } else {
            const user = dbRes.rows[0]
            res.render('setting_user', { user })
        }
    })
})
router.put('/users/:id', (req, res) => {// update single user
    const plainTextPassword = req.body.newpassword

    //one way function password(pudding) + salt = digested password 
    bcrypt.genSalt(10, (err, salt) => {

        bcrypt.hash(plainTextPassword, salt, (err, digestedPassword) => {
            //the digested password is what we want to save in db
            console.log(digestedPassword);
``
            const sql = `UPDATE users SET email = $1, password_digest = $2 WHERE id = ${req.params.id};`

            // res.send(`${sql}`)
            db.query(sql, [req.body.newemail, digestedPassword], (err, dbRes) => {
                if (err) {
                    console.log(err);
                } else {
                    // let email = dbRes.rows[0].email;
                    // console.log(email);
                    res.redirect('/login')
                }
            })
        })
    })

})
router.delete('/users/:id', (req, res) => {// delete a user 
    const sql = `DELETE FROM users WHERE id = $1;`
    // res.send(`${sql}`)
    db.query(sql, [req.params.id], (err, dbRes) => {
        if (err) {
            console.log(err);

        } else {
            console.log(dbRes.rows);
            req.session.destroy(() => {
                res.redirect("/")
            })
        }
    })
})



module.exports = router
