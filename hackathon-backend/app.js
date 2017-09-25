var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();
var server =  require('http').Server(app);
var io = require('socket.io')(server);

var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/hack';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'hackathon/dist/')));
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'hackathon/dist/index.html'))
})
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


server.listen(3000, function(){
  console.log('server running on port 3000')
})

io.on('connection', function(socket){
  socket.on('playerDetails', function(data){
    console.log(data)
  })
  socket.broadcast.emit('otherPlayer', {message: 'player added'})
})
