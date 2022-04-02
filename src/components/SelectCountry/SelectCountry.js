import React from "react";

const SelectCountry = ({ singleCountry, handleRemoveCountry,handleRemoveAll }) => {
  return (
    <div className="mt-5 ms-5">
      {/* <img src={singleCountry.flags.png} alt="" /> */}
      {singleCountry.length === 0?<h3>select country is 0</h3>:<h3>selected countries are</h3>}
      {singleCountry.map(country =>
        <div className="d-flex mt-3 ">
          <img className="w-25 h-25 me-3" src={country.flags.png} alt="" />
          <h2>
            {country.name.common}
          </h2>
          <div>
            <button
              onClick={() => handleRemoveCountry(country)}
              className="ms-3"
            >
              Remove
            </button>
            
          </div>
          
        </div>
        
      )}
      {singleCountry.length >= 5 && <button onClick={()=> handleRemoveAll(singleCountry)}>Remove All</button>}
    </div>
  );
};

export default SelectCountry;
