import React from "react";

function Search({onSearchChange}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => {
          console.log("Search Query:", e.target.value);
          onSearchChange(e.target.value)}
        }
      />
    </div>
  );
}

export default Search;
