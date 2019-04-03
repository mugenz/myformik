import React from 'react';

const UserContext = React.createContext();

const { Provider, Consumer } = UserContext;

const UserProvider = (props) => {
    const {children} = props;
    return (
        <Provider value={{
            manos: 'MANOS',
            kostas: 'KOSTAS'
          }}
        >
            {children}
        </Provider>
    )
}

export default UserContext;
export {UserProvider, Consumer};

