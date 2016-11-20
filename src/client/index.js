import React from 'react';
import ReactDOM from 'react-dom';
import Translator from '../services/translator';
import App from '../components/home';

const translator = new Translator(window.props.translator);

ReactDOM.render(<App translator={translator} droppoints={window.props.droppoints}/>, document.getElementById('main'));
