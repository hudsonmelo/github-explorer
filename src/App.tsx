import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Route from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
