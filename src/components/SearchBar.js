import { useState } from "react";

export const SearchBar = ( {onSearchChange} ) => {
  const [search, setSearch] =  useState('');
  const manageSearch = (evt)=>{
    
    const s = evt.target.value.trim();
    setSearch(s);
   
  };
  const searchMovies =  (evt) => {
    evt.preventDefault(); 
    if(search.length > 3) {
      onSearchChange(search)
    }
  };


    return (      
    <form className="d-flex" role="search">
    <input className="form-control me-2" type="search" placeholder="Search movies" aria-label="Search" name="search" onChange={manageSearch} value={search}/>
    <button onClick={searchMovies} className="btn btn-outline-info me-2" type="submit">Search</button>
    <button onClick={()=> {setSearch('')}} className="btn btn-outline-info" type="reset">Reset</button>
  </form>
  );
    
};
