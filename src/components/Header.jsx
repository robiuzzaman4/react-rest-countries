import React from 'react';
import ThemeButton from './ThemeButton';

const Header = () => {
    return (
        <header className='bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50 border-b border-slate-200 dark:border-slate-900'>
            <div className='max-w-screen-lg mx-auto px-4 py-6 flex items-center justify-between'>
                <h1 className='text-primary text-2xl font-semibold'>Where in the world?</h1>
                <ThemeButton></ThemeButton>
            </div>
        </header>
    );
};

export default Header;