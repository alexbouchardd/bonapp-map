import React from 'react';
import ReactDOMServer from 'react-dom/server';

import places from '../../data/places';
import droppoints from '../../data/droppoints';

import Home from '../components/home';

module.exports = function(app){
  app.get('/api/droppoints', function(req, res) {
    var full_droppoints = droppoints.map(droppoint => {
      droppoint.place = places[droppoint.place_id];
      return droppoint;
    });
    res.send(full_droppoints);
  });

  app.get('/', (req, res) => {
    var full_droppoints = droppoints.map(droppoint => {
      droppoint.place = places[droppoint.place_id];
      return droppoint;
    });
    const props = {
      droppoints: full_droppoints
    }
    const markup = ReactDOMServer.renderToString(<Home droppoints={props.droppoints}/>);
    return res.render('index', { props: props, html: markup });
  });
};
