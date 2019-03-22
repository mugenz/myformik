import React from 'react';
import { ThemeProvider } from 'styled-components';

const StyleProvider = ({ children }) => {
    const theme = {
        color: 'red',
        color2: 'green'
    }
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default StyleProvider