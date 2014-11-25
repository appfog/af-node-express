var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello from <a href="http://appfog.com">AppFog.com</a>');
});

app.listen(process.env.VCAP_APP_PORT || 3000);
