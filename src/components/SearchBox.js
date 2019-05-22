import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
      <div>
        <input
          type="search"
          placeholder="Search for a Meteorite Landing"
          onChange={searchChange}
        />
      </div>
    );
  };
  
  export default SearchBox;