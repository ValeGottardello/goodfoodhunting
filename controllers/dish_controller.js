const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('./../middlewares/ensure_loggedin')
const db = require("./../db")

//     |
//     |
//     V
router.get("/", (req, res) => {

    console.log(req.user);
    const sql = 'SELECT * FROM dishes;'

    db.query(sql, (err, dbRes) => {

        const dishes = dbRes.rows

        res.render('home', { dishes, email : req.session.email })

    })

})
//     |
//     |
//     V  
router.get("/dishes/new", ensureLoggedIn, (req, res) => {
    res.render("new_dish")
})
//     |
//     |
//     V
router.get("/dishes/:id",ensureLoggedIn, (req, res) => {

    
    const sql = `SELECT * FROM dishes WHERE id = $1;`
    // const queryDish = req.query.dish
    db.query(sql, [req.params.id], (err, dbRes) => {
        if (err) {
            console.log(err);
        } else {
            const dish = dbRes.rows[0]
            // console.log(dbRes);
            res.render('details', { dish })
        }

    })

})
//     |
//     |
//     V
router.post("/dishes", ensureLoggedIn, (req, res) => {
    //req.query title
    // put it in put database 
    // res.send("i am in the right place")
    // //prepare the message we're sending to the db

    // if (!req.session.userId) {
    //     res.redirect("/login")
    //     return
    // }    
    
    const sql = `INSERT INTO dishes (title, image_url, user_id) VALUES ($1, $2, $3);`

    db.query(sql, [req.body.title, req.body.image_url, res.locals.currentUser.id], (err, dbRes) => {
        console.log(err);
        res.redirect("/") //redirect always get

    })

})
//     |
//     |
//     V
router.get("/dishes/:id/edit", (req, res) => {
    // fetch the record for this dish
    // to use in the form in the template
    const sql = `SELECT * FROM dishes WHERE id = $1;`
    // console.log(`${req.params.id}`)

    db.query(sql, [req.params.id],(err, dbRes) => {
        if (err) {
            console.log(err);
            // process.exit(1)
        } else {
            const dish = dbRes.rows[0]
            res.render('edit_dish', { dish })
        }
    })
})
//     |
//     |
//     V
router.put("/dishes/:id", (req, res) => {

    const sql = `UPDATE dishes SET title = $1, image_url = $2, details = 'another cake2' WHERE id = $3;`

    db.query(sql, [req.body.title, req.body.image_url, req.params.id],(err, dbRes) => {
        res.redirect(`/dishes/${req.params.id}`)
    })

})
//     |
//     |
//     V
router.delete("/dishes/:id", (req, res) => {
    const sql = `DELETE FROM dishes WHERE id = $1;`

    db.query(sql,[req.params.id], (err, dbRes) => {
        res.redirect("/")
    })
})
//     |
//     |
//     V
module.exports = router