import { useEffect, useState } from 'react';
import './App.css';
import { SearchBar } from './Components/Search/SearchBar';
import { Cards } from './Components/Cards/Cards';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    callApi()
  },[search])
  
  const callApi = async () =>{
   try{
    const response = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=2069fe59`);
    console.log(response.data)
    setMovies(response.data.Search)
   }
   catch (error){
    console.log(error)
   }
  }
 

  return (
    <>
  <SearchBar setSearch={setSearch} />
<div >
  {movies?.map((movie, key) => (
    <Cards key={movie.imdbID} movie={movie} index={key} />
  ))}
</div>

    </>
  )
}

export default App
