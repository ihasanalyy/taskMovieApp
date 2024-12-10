
const Cards =({movie})=>{

    // console.log(movies.search)
    return(
        // <div class="bg-white flex justify-center items-center w-screen p-5 border-red-600">
  <div class=" p-3 rounded-lg dark:bg-gray-600 dark:text-gray-200 m-auto w-100">
  <img 
  className="h-40 rounded-lg flex justify-center items-center w-100" 
  src={movie.Poster} 
  alt={movie.Title}
/>
    <h1 class="text-xl sm:text-2xl font-semibold p-3">{movie.Title}</h1>
    <p class="text-sm sm:text-md md:text-lg font-medium px-3">{movie.Year}</p>
  </div>
// </div>
    )
}

export {Cards}