import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function Movie({converImg, title, summary, genres}) {    
    return (   
    <div>
        <img src = {converImg} alt="title"></img>
        <h2>
            <Link to ="/movie">{title}</Link>
        </h2>
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

Movie.propTypes = {
    converImg: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;