import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year23.'
      )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, [])
  console.log(movies);
  return (
    <div>
      {loading? 
      <h1>Loading...</h1>
       : 
       <div>
         {movies.map((movie) => (
         <div key = {movie.id}>
           <h2>{movie.title}</h2>
           <p>{movie.summary}</p>
           <ul>
             {movie.genres.map(g => <li>{g}</li>)}
           </ul>
           </div>
         ))}
         </div>
         } 
    </div>
  );
}

export default App;
