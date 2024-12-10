
const Cards =({movie})=>{

    // console.log(movies.search)
    return(
        <div class="bg-white flex justify-center items-center w-screen p-5 bg-black grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  <div class="shadow-md max-w-2xl p-3 rounded-lg dark:bg-gray-600 dark:text-gray-200 mx-auto">
  <img 
  className="bg-green-200 h-40 rounded-lg flex justify-center items-center text-gray-700" 
  src={movie.Poster} 
  alt={movie.Title}
/>
    <h1 class="text-xl sm:text-2xl font-semibold p-3">{movie.Title}</h1>
    <p class="text-sm sm:text-md md:text-lg font-medium px-3">{movie.Year}</p>
  </div>
</div>
    )
}

export {Cards}