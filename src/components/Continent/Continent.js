import React, { createContext } from "react";
import Africa from "../Africa/Africa";
import Asia from "../Asia/Asia";
import Europe from "../Europe/Europe";
import NorthAmerica from "../NorthAmerica/NorthAmerica";
import "./Continent.css";

const Continent = () => {
  const populationAsia = 4.6+' billion';
  const populationNorthAmerica = 580 +' million';
  const populationEurope = 750 +' million';
  const populationAfrica = 1.3 +' billion';

  return (
    <PopulationContext.Provider value={[populationAsia,populationNorthAmerica,populationEurope,populationAfrica]}>
        <div className="d-flex justify-content-center continent mt-5">
        <Asia />
        <Africa />
        <Europe />
        <NorthAmerica />
      </div>
    </PopulationContext.Provider>
  );
};

export const PopulationContext = createContext("population");
export default Continent;
