import React from "react";
import SearchBar from './SearchBar'
import stilo from'./../components/NavModule.css'
import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <div className={stilo.APP}>
      <Link to='/home'>Home</Link>
      <br />
      <Link to='/about'>About</Link>
      <br />
      <Link to='/Favorites'>Favorite</Link>
      <br /> 
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
