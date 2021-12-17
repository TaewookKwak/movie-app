function Movie({1, title, summary, genres}) {
    return (   
    <div>
        <img src = {1} alt=""></img>
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
          {genres.map(g => 
           <li key ={g}>
           {g}
           </li>)
           }
        </ul>
    </div>
    )
 
}

export default Movie;