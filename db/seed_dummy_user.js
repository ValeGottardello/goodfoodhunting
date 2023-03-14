
//  const { Client } = require('pg') //need to save to db

// const bcrypt = require('bcrypt')

// ///
// const email = 'dt@gmail.com'
// const plainTextPassword = 'pudding'

// const db = new Client ({
//     database: 'goodfoodhunting',
// })

// db.connect()

// //one way function password(pudding) + salt = digested password 
// bcrypt.genSalt(10, (err, salt) => {

//     bcrypt.hash(plainTextPassword, salt, (err, digestedPassword) => {
//         //the digested password is what we want to save in db
//         console.log(digestedPassword);

//         const sql = `INSERT INTO users (email, password_digest) VALUES ('${email}', '${digestedPassword}');`

//         db.query(sql, (err, dbRes) =>{
//             db.end()
//         })
//     })
// })