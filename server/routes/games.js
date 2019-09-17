// const express = require('express');
// const router = express.Router();
// const axios = require("axios");
// const config = require("dotenv").config();
// const mongoose = require("mongoose");


// router.get("/", (req, res, next)=> {
// axios.get("https://api.rawg.io/api/games?page=20")
// .then ((results) =>{
//     console.log(results);
//     // let gamesArray = [];
// let games = results.data.results;
//     debugger;
//     mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gameover-uogeo.mongodb.net/test?retryWrites=true&w=majority`);
// debugger;
//     const db = mongoose.connection;
// debugger;
//         db.collection("games").insert(games, function(err, res) {
//             debugger;
// if(err) throw err;
// console.log(games);
// console.log(res);
//         })

// })
// .catch((err)=> {
//     console.log(err);
// });
// res.render("Games");
// })


// module.exports = router;