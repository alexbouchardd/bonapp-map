import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/home';

ReactDOM.render(<App droppoints={window.props.droppoints}/>, document.getElementById('main'));
