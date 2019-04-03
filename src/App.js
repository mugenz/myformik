import React from 'react';
import Main from './components/Main';
import StyleProvider from './components/theme/StyleProvider';
import { UserProvider } from './components/context/UserContext';

const App = () => (
  <>
    <UserProvider>
      <StyleProvider>
      <Main />
      </StyleProvider>
    </UserProvider> 
  </>
);


export default App;
