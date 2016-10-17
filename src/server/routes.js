module.exports = function(app){
  app.get('/api/droppoints', function(req, res) {
    res.send(require('../../data/droppoints'));
  });
}
