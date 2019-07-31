const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
name: String,
lastname: String,
birthdate: { type: Date, default: Date.now },
email: String,
password: String
});


module.exports = mongoose.model("User", UserSchema);