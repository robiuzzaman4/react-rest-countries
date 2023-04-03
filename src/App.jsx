import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;