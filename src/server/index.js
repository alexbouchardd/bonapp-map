import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.set('port', (process.env.PORT || 3000));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use('/public', express.static(path.join(process.cwd(), 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

require('./routes')(app);

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
