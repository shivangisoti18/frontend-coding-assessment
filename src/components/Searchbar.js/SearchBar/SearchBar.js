import React from 'react';

const SearchBar =({search,onSerach})=>{
      const [search,setSearch]= useState(" ");

      const handleSearch=(e)=>{
        setSearch(e.target.value);
      }

    return(
        <>
        <input
        type="text"
        placeholder="Search Username"
        value={serach} 
        onClick={onSerach}
        />

        </>
    )

}
export default  SearchBar