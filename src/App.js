import React from "react";
import Main from "./components/Main";
import StyleProvider from "./components/theme/StyleProvider";
import { UserProvider } from "./components/context/UserContext";
import { StateProvider } from "./components/context/StateContext";

const App = () => (
  <>
    <StateProvider>
      <UserProvider>
        <StyleProvider>
          <Main />
        </StyleProvider>
      </UserProvider>
    </StateProvider>
  </>
);

export default App;
