import React from 'react';

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="filter-bar">
      <button 
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : ""}
      >
        All
      </button>
      <button 
        onClick={() => setFilter("active")}
        className={filter === "active" ? "active" : ""}
      >
        Active
      </button>
      <button 
        onClick={() => setFilter("inactive")}
        className={filter === "inactive" ? "active" : ""}
      >
        Inactive
      </button>
    </div>
  );
};

export default FilterBar;
