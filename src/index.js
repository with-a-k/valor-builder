import React from 'react';
import ReactDOM from 'react-dom';
import CharacterBuilder from './CharacterBuilder';
import registerServiceWorker from './registerServiceWorker';
import './styles.js';

ReactDOM.render(
  <CharacterBuilder />,
  document.getElementById('root')
);
registerServiceWorker();
