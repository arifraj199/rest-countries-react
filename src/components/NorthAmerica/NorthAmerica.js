import React, { useContext } from 'react';
import { PopulationContext } from '../Continent/Continent';

const NorthAmerica = () => {
    const population = useContext(PopulationContext);
    return (
        <div>
            <h2>North America</h2>
            <h3>Population: {population[1]}</h3>
        </div>
    );
};

export default NorthAmerica;