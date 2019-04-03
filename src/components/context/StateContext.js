import React from "react";

const StateContext = React.createContext();
const { Provider, Consumer } = StateContext;
class StateProvider extends React.Component {
  state = {
    name: null
  };

  updateName = name => {
    this.setState = { showName: name };
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          showName: this.updateName
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default StateContext;
export { StateProvider, Consumer as StateConsumer };
