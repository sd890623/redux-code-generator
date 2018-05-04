import React from 'react';
import ReactDOM from 'react-dom';
import QueryGenerator from './components/queryGenerator';

import './scss/application.scss';

if (document.getElementById('root')) {
  ReactDOM.render(
    <QueryGenerator />,
    document.getElementById('root')
  );
}
