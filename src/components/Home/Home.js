import React from 'react';
import { useNavigate } from 'react-router-dom';
import Continent from '../Continent/Continent';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Continent of the World</h1>
            <button onClick={()=> navigate('/countries')} className='border-0 px-4 py-2 fs-5 rounded-3 fw-bold'>See All Countries</button>
            <Continent></Continent>
        </div>
    );
};

export default Home;