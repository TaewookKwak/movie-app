import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";
import Rate from 'rc-rate';
function Movie({id,converImg, title, summary, genres}) {    
    return (   
    <div className={styles.movie}>
        <img className={styles.coverImg} src = {converImg} alt="title"></img>
        <Rate className={styles.rate} defaultValue= {2.5} count={5}/>
        <h2>
            <Link className={styles.title} to ={`/movie/${id}`}>{title.length > 40 ? `${title.slice(0, 40)}...` : title}</Link>
        </h2>
        <p className={styles.summary}>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
        <ul>
          {genres.map(g => 
           <li className={styles.genres} key ={g}>
           {g}
           </li>)
           }
        </ul>
    </div>
    )
 
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    converImg: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;