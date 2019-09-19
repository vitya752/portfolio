import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import imageUrl from './img/paris.jpg';

ReactDOM.render(<App imageUrl={imageUrl} />, document.getElementById('root'));