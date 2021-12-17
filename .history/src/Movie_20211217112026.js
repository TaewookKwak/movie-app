import PropTypes from "prop-types";

function Movie({converImg, title, summary, genres}) {    
    return (   
    <div>
        <img src = {converImg} alt="title"></img>
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