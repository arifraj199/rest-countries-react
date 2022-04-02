import React, { useContext } from 'react';
import { PopulationContext } from '../Continent/Continent';

const Asia = () => {
    const population = useContext(PopulationContext);
    return (
        <div>
            <h2>Asia</h2>
            <h3>Population: {population[0]}</h3>
        </div>
    );
};

export default Asia;