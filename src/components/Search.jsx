import React, {useState, useContext} from 'react';
import './SearchNews.css'
import { ValueContext } from './context';

function Search() {

  const {submitHandler, changeHandler, query} = useContext(ValueContext);

  return (
       <div className='searchbar'>
        <div className='logo'><a href="/"><h2>News<span>Portal</span></h2></a></div>
       <form onSubmit={(e)=>submitHandler(e)}>
              <input type="text" className='search' name="search" id="" onChange={(e)=>changeHandler(e)} value={query} placeholder="Search here..."/>
              <button type='submit' className='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
       </div>
  )
}

export default Search