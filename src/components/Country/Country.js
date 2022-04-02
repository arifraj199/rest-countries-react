import React from 'react';

const Country = (props) => {
    const {country,handleSelectCountry} = props;
    const {name,flags,population,capital} = country;
    return (
        <div className='border border-success p-3 rounded-3'>
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <h3>Capital: {capital}</h3>
            <h4>Population: {population}</h4>
            <button onClick={()=> handleSelectCountry(country)} className='px-3 py-1 border-0 bg-success text-white rounded-3 fs-5'>Add Country</button>
        </div>
    );
};

export default Country;