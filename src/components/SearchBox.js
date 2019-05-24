import React from "react";

const SearchBox = ({ onSearchChange, onDetectSubmit }) => {
  return (
    <div className="row" style={{ textAlign: "center" }}>
      <div className="col-lg-4 col-lg-offset-4 col-centered">
        <input
          className="col-form-label col-form-label-lg"
          type="search"
          placeholder="Search for a Meteorite"
          onChange={onSearchChange}
        />
        <br />
        <button
          className="btn btn-secondary"
          onClick={onDetectSubmit}
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
