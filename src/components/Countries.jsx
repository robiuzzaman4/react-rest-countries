import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country';

const Countries = () => {
    const countries = useLoaderData();
    // console.log(countries);
    return (
        <div className='bg-slate-50 dark:bg-slate-950 max-w-screen-lg mx-auto px-4 py-10 grid md:grid-cols-3 gap-4'>
            {
                countries.map((countrie) => <Country
                    key={countrie.cca3}
                    countrie={countrie}
                ></Country>)
            }
        </div>
    );
};

export default Countries;