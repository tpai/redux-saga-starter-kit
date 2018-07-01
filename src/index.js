import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';

import HelloReact from 'containers/HelloReact';

render(
  <Provider store={store}>
    <HelloReact />
  </Provider>,
  document.getElementById('app'),
);
