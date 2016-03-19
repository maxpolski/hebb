var express = require('express');
var path    = require('path');
var fs      = require('fs');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
  fs.readFile('public/index.htm', function(err, data) {
      if(!err) {
        res.set('Content-Type', 'text/html');
        res.status(200).send(data);
      } else {
        console.log('err', err)
        res.status(404).end("not found");
      }
    }
  );
});

app.listen(8080, function() {
    console.log('listening on port 8080');
  }
);
