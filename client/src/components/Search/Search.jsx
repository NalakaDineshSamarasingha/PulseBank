import React, { useState } from "react";

function Search({onSearch}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); 
  };

  return (
    <div className="text-center mb-8">
      <input
        type="text"
        placeholder="Enter district name"
        value={searchTerm}
        onChange={handleSearch}
        className="border-2 border-gray-300 p-2 rounded-lg w-1/2"
      />
    </div>
  );
}

export default Search;
