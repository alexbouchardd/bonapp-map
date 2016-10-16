module.exports = function(app){
  app.get('/api/droppoints', function(req, res) {
    console.log('DO SOMETHING HERE');
    res.send("Nothing to see here yet").end(200);
  });
}
