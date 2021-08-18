import React from 'react'

export const themes = {
    dark: {
        color: "white",
        background: "black",
        body: "black",
        transition: "0.2s ease"
    },
    light: {
        color: "black",
        background: "white",
        transition: "0.2s ease"
    }
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext;