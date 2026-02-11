import React, { useState, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved || 'dark'
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.classList.toggle('light', theme === 'light')
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}