var express = require('express'),
    app = express();

app.use(function (req, res, next) {
  console.log([req.method, req.url].join(' '));

  next();
});

// localhost:3000 -> {value: 0.532242}
app.get('/', function (req, res) {
  res.json({value: Math.random(), anotherValue: Math.random() * 10});
});

app.listen(3000, function () {
  console.log('server listening on port 3000');
});
