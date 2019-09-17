const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("dotenv").config();
const mongoose = require("mongoose");
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const CartController = require('./controllers/CartController');
const GameController = require('./controllers/GameController');
const SearchController = require('./controllers/SearchController');
const OrderController = require('./controllers/OrderController');
// const gamesRouter = require('./routes/games');
// const gameRouter = require('./routes/game');
const indexRouter = require('./routes/index');

// const usersRouter = require('./routes/users');

const app = express();
app.use(cors());


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gameover-uogeo.mongodb.net/test?retryWrites=true&w=majority`);

const db = mongoose.connection;
console.log(db);
db.on("error", function(error) {
  console.error("Whoops, something went wrong!", error);
});
db.once("open", function() {
  console.log("DB connection is up and running");
});


app.use('/auth', AuthController);
app.use('/user', UserController);
app.use('/cart', CartController);
app.use('/games', GameController);
app.use('/', indexRouter);
app.use('/search', SearchController);
app.use('/order', OrderController);
// app.use('/games', gamesRouter);
// app.use('/users', usersRouter);


// view engine setup
app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
