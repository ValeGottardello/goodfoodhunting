// const { Pool } = require('pg')
// const db = new Pool({
//     database: "goodfoodhunting",
// })

// let ramdomImg = ["Arepas", "Barbecue Ribs", "Bruschette with Tomato", "Bunny Chow", "Caesar Salad", "California Maki", "Caprese Salad", "Cauliflower Penne", "Cheeseburger", "Chicken Fajitas", "Chicken Milanese", "Chicken Parm", "Chicken Wings", "Chilli con Carne", "Ebiten maki", "Fettuccine Alfredo", "Fish and Chips", "French Fries", "Sausages", "French Toast", "Hummus", "Katsu Curry", "Kebab", "Lasagne", "Linguine with Clams", "Massaman Curry", "Meatballs with Sauce", "Mushroom Risotto", "Pappardelle alla Bolognese", "Pasta Carbonara", "Pasta and Beans", "Pasta with Tomato and Basil", "Peking Duck", "Philadelphia Maki", "Pho", "Pierogi", "Pizza", "Poke", "Pork Belly Buns", "Pork Sausage Roll", "Poutine", "Ricotta Stuffed Ravioli", "Risotto with Seafood", "Salmon Nigiri", "Scotch Eggs", "Seafood Paella", "Som Tam", "Souvlaki", "Stinky Tofu", "Sushi", "Tacos", "Teriyaki Chicken Donburi", "Tiramisù", "Tuna Sashimi", "Vegetable Soup"]

// let img = 'http://via.placeholder.com/300px300'

// //write  a program that generate 20 ramdom images and insert in db 

// for (let i = 0; i <= 20; i++) {
//     const sql = `INSERT INTO dishes (title, image_url, details) VALUES ('$1', '$2', 'another cake') returning id;`

//     db.query(sql, [ramdomImg[i], img], (err, dbRes) => {
//         if (err) {
//             console.log(err);
//             res.render('home')
//         } else {
//             console.log(dbRes.rows[0].id);
//         }
//     })
// }


