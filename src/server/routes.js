import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Translator from '../services/translator'

import places from '../../data/places';
import droppoints from '../../data/droppoints';

import Home from '../components/home';

module.exports = function(app){
  app.get('/api/droppoints', function(req, res) {
    const full_droppoints = droppoints.map(droppoint => {
      droppoint.place = places[droppoint.place_id];
      return droppoint;
    });
    res.send(full_droppoints);
  });

  app.get('/', (req, res) => {
    return res.render('index', renderHome(req));
  });

  app.get('/:lang', (req, res) => {
    return res.render('index', renderHome(req));
  });
};

function renderHome(req) {
  const full_droppoints = droppoints.map(droppoint => {
    droppoint.place = places[droppoint.place_id];
    return droppoint;
  });

  const accept_lang = req.acceptsLanguages(["fr", "en"]);
  let lang = accept_lang ? accept_lang : "fr";

  if(req.params.lang) {
    lang = ["fr", "en"].indexOf(req.params.lang) >= 0 ? req.params.lang : lang;
  }

  const context = {
    translator: new Translator({
      lang: lang
    })
  };

  const props = {
    translator: context.translator,
    droppoints: full_droppoints
  };

  const markup = ReactDOMServer.renderToString(<Home translator={context.translator} droppoints={props.droppoints}/>);
  return { props: props, html: markup };
}
