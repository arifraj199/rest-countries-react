import React, { useState } from "react";
import useCountries from "../../hooks/useCountries";
import Country from "../Country/Country";
import SelectCountry from "../SelectCountry/SelectCountry";
import "./Countries.css";

const Countries = () => {
  const [countries] = useCountries();
  const [singleCountry,setSingleCountry] = useState([]);

  const handleSelectCountry = selectCountry => {
      const exists = singleCountry.find(country => country.cca3 === selectCountry.cca3);
      if(!exists){
        const newCountry = [...singleCountry,selectCountry];
        setSingleCountry(newCountry);
      }else{
          alert('country has already exists');
      }  
  }

  const handleRemoveCountry = selectCountry => {
      const rest = singleCountry.filter(country=> country.cca3 !== selectCountry.cca3);
      setSingleCountry(rest);
  }

  const handleRemoveAll = allCountry => {
      const singleCountry = [];
      setSingleCountry(singleCountry);
  }

  return (
    <div className="countries-container">
      <div className="show-countries">
        <h2>
          Countries:{countries.length}
        </h2>
        <div className="countries mt-5">
          {countries.map(country =>
            <Country key={country.cca3} country={country} handleSelectCountry={handleSelectCountry} />
          )}
        </div>
      </div>
      <div className="select-countries mt-2">
        <h2>Select Countries</h2>
        <SelectCountry key={singleCountry.cca3} singleCountry={singleCountry} handleRemoveCountry={handleRemoveCountry} handleRemoveAll={handleRemoveAll}></SelectCountry>
      </div>
    </div>
  );
};

export default Countries;
