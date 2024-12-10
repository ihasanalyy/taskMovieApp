import { useEffect, useState } from 'react';
import './App.css';
import { SearchBar } from './Components/Search/SearchBar';
import { Cards } from './Components/Cards/Cards';
import { SideBars } from './Components/SideBars/SideBars';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    callApi()
  }, [search])

  const callApi = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=2069fe59`);
      console.log(response.data)
      setMovies(response.data.Search)
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <SearchBar setSearch={setSearch} />
      <div className="flex">
        {/* Sidebar */}
        <SideBars className="w-1/4" />

        {/* Main content for movies */}
        <div className="bg-black flex flex-wrap gap-4 p-4 text-white w-full">
          {movies?.map((movie, key) => (
            <div className="w-full sm:w-1/2 lg:w-1/4 m-auto" key={movie.imdbID}>
              <Cards movie={movie} index={key} />
            </div>
          ))}
        </div>
      </div>
    </>

  )
}

export default App
