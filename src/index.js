import 'babel-polyfill';
import 'md-gum-polyfill';

import ReactDOM from 'react-dom';
import React from 'react';
import Application from './Application';

ReactDOM.render(<Application />, document.getElementById('app-container'));