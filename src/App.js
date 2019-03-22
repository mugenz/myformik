import React from 'react';
import Main from './components/Main';
import StyleProvider from './components/theme/StyleProvider';

const App = () => (
  <>
    <StyleProvider>
     <Main />
    </StyleProvider>
  </>
);


export default App;
