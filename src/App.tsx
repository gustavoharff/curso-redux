import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <h1>Teste</h1>
  </Provider>
);

export default App;
