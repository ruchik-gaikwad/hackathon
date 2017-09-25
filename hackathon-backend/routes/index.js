var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended : true}));

var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
  username: String,
  email: String,
  id: String,
  score: String
})

var player = mongoose.model('hack', playerSchema);

router.post('/players/scores', function(req, res){
  if(!req.body.username || !req.body.email || !req.body.id || !req.body.score){
    res.send({ message : 'Please send the complete crendentials'})
  }else{

   var details =  new player({
     username: req.body.username,
     email: req.body.email,
     id: req.body.id,
     score: req.body.score
   })

   details.save(function(err, docs){
       if ( err ) throw err;
       console.log("details added to db");
       res.json(docs);
     });
   }

})

module.exports = router;
