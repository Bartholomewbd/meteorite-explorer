import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="row" style={{ textAlign: "center" }}>
      <div className="col-lg-4 col-lg-offset-4 col-centered">
        <input
          className="col-form-label col-form-label-lg"
          type="search"
          placeholder="Search for a Meteorite"
          onChange={searchChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
