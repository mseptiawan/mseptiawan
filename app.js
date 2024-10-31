var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mseptiawanRouter = require('./routes/mseptiawan');

var app = express();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Login","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",)
})


mongoose.connect(
  "mongodb+srv://septiawantechnology:U9tXJCipKSLqhKgt@septiawan.vaa84.mongodb.net/dbPariwisata?retryWrites=true&w=majority&appName=septiawan"
).then(()=>{
  console.log("udah terhubung nih");
}).catch((err)=>{
  console.log("ada yang salah");
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mseptiawan',mseptiawanRouter);
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