import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

import Translator from '../src/services/translator'
import places from '../data/places';
import droppoints from '../data/droppoints';
import Home from '../src/components/home';

const langs = ['fr', 'en'];

const file = fs.readFileSync(path.join(process.cwd(), '/views/index.ejs'), 'ascii');

const full_droppoints = droppoints.map(droppoint => {
  droppoint.place = places[droppoint.place_id];
  return droppoint;
});

langs.forEach((lang, index) => {
  const context = {
    translator: new Translator({
      lang: lang
    })
  };
  
  const props = {
    translator: context.translator,
    droppoints: full_droppoints
  };

  const markup = ReactDOMServer.renderToString(
    <Home 
      translator={context.translator}
      droppoints={props.droppoints}
    />
  );

  const html = ejs.render(file, {
    props,
    html: markup,
    title: context.translator.t("!seo.title"),
    description: context.translator.t("!seo.description") 
  });

  if (index === 0) {
    fs.writeFileSync(path.join(process.cwd(), `/docs/index.html`), html);
  }

  fs.writeFileSync(path.join(process.cwd(), `/docs/${lang}.html`), html);

  console.log("Templates saved");
})
