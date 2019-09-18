const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const OrderSchema = new Schema({
    id: String,
    name: String,
    image: String
});

const CartSchema = new Schema({
    id: String,
    name: String,
    image: String,
    price: Number
});

const UserSchema = new Schema({
name: String,
lastname: String,
birthdate: { type: Date, default: Date.now },
email: String,
password: String,
telephone: Number,
address: String,
zipcode: Number,
city: String,
role: String,
orders:[[OrderSchema]],
cart:[CartSchema],
});


UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });

module.exports = mongoose.model("User", UserSchema);