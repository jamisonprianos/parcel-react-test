import React from 'react';
import ReactDOM from 'react-dom';

import SiteStructure from './components/SiteStructure';

ReactDOM.render(<SiteStructure />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
