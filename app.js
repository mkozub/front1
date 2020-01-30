const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello to ben");
});
 
module.exports.app = app;
