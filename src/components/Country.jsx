import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ countrie }) => {
    const { name, region, flags, cca3 } = countrie;
    return (
        <div className="bg-white dark:bg-slate-900/50 shadow-xl rounded-sm">
            <figure>
                <img className='w-full h-40 bg-cover rounded-sm' src={flags.svg} alt="Flags" />
            </figure>
            <div className="flex flex-col gap-2 p-4">
                <h2 className="text-2xl font-semibold">{name.common}</h2>
                <p className='font-semibold text-xl'>Region: {region}</p>
                <div className="ms-auto mt-2">
                    <Link to={`/country/${cca3}`}>
                        <button className="btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Country;