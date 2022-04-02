import React, { useContext } from 'react';
import { PopulationContext } from '../Continent/Continent';

const Europe = () => {
    const population = useContext(PopulationContext);
    return (
        <div>
            <h2>Europe</h2>
            <h3>Population: {population[2]}</h3>
        </div>
    );
};

export default Europe;