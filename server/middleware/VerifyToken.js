const jwt = require('jsonwebtoken');
const config = require("dotenv").config();

function verifyToken(req, res, next) {
    let token = req.headers['x-access-token'] || req.body.headers['x-access-token'];

    if(!token) {
        return res.status(401).send({
            authenticated: false,
            message: 'Unauthorized. No token provided.'
        });
    }

jwt.verify(token, process.env.SECRET, function(error, decodedToken){
if(error) {
    res.status(500).send({
        authenticated: false,
        message: 'An error occured when trying to authenticate token.'
    });
}

req.userId = decodedToken.id;
next();
});
}

module.exports = verifyToken;