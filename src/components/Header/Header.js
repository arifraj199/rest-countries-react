import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="mt-3 mb-4 d-flex justify-content-center">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/countries">Coutries</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/service">Service</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
