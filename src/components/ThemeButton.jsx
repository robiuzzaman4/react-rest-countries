import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeButton = () => {

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        const html = document.querySelector('html');
        if (darkMode) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <button onClick={toggleDarkMode}>
            {darkMode 
            ? <SunIcon className="h-5 w-5 text-black dark:text-white" />
            : <MoonIcon className="h-5 w-5 text-black dark:text-white" />}
        </button>
    );
};

export default ThemeButton;