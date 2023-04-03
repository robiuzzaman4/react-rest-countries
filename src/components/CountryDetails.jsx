import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CountryDetails = () => {
    const country = useLoaderData();
    const { name, flags, independent, currencies, capital, region, subregion, area, population } = country[0];

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (

        <div className='max-w-screen-lg mx-auto px-4 py-10 flex flex-col items-start gap-4'>
            <button onClick={handleGoBack} className='btn-secondary'>Go Back</button>
            <div className='grid md:grid-cols-2 gap-8'>
                <div>
                    <div>
                        <img src={flags.svg} className='rounded-sm' alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-semibold'>Common Name: {name.common}</h1>
                    <h2 className='xl font-semibold'>Official Name: {name.official}</h2>
                    <h2 className='xl font-semibold'>Native Name: {Object.values(name.nativeName)[0].official}</h2>
                    <h2 className='xl font-semibold'>Region: {region}</h2>
                    <h2 className='xl font-semibold'>Sub Region: {subregion}</h2>
                    <h2 className='xl font-semibold'>Capital: {capital}</h2>
                    <div className='xl font-semibold'>
                        <span>Currency:</span>
                        <ul className='ml-12 list-disc'>
                            <li>Name: {Object.keys(country[0].currencies)} [{Object.values(currencies)[0].name}]</li>
                            <li>Symbol: {Object.values(currencies)[0].symbol}</li>
                        </ul>
                    </div>
                    <h2 className='xl font-semibold'>Independent: {independent ? "Yes" : "No"}</h2>
                    <h2 className='xl font-semibold'>Area: {area}</h2>
                    <h2 className='xl font-semibold'>Population: {population.toString()}</h2>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;