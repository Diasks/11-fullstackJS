const express = require('express');
const router = express.Router();


/* GET games listing. */
router.get('/game', function(req, res, next) {
    debugger;
  console.log(res)
  db.collection('games').find({ field:'name' }).toArray((err, data) =>{
      debugger;
    if (err) console.log(err)
    else{
     data.forEach(
      (doc) => {
       console.log(doc.name);
       }
     );
  res.send('respond with a resource');
  res.render('game');
}
})
})
  

module.exports = router;
