import React, { useContext } from 'react';
import { PopulationContext } from '../Continent/Continent';

const Africa = () => {
    const population = useContext(PopulationContext);
    return (
        <div>
            <h2>Africa</h2>
            <h3>Population: {population[3]}</h3>
        </div>
    );
};

export default Africa;