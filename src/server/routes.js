import places from '../../data/places';
import droppoints from '../../data/droppoints';

module.exports = function(app){
  app.get('/api/droppoints', function(req, res) {
    var full_droppoints = droppoints.map(droppoint => {
      droppoint.place = places[droppoint.place_id];
      return droppoint;
    });
    res.send(full_droppoints);
  });
}
