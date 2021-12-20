import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css";
function Detail () {
    const {id} = useParams();
    const [movie, setMovies] = useState([]);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    },[]);
    return (
        <div>
            <header>
                <i class="fas fa-film"></i>
                <h1 className={stlyes.logoName}>MOVIES</h1>
            </header>
            <main>
                <section></section>
                <section></section>
            </main>
            <h1 className={styles.title}>{movie.title_long}</h1>
            <h3>{movie.year}</h3>
            <h3>{movie.rating}</h3>
            <h3>{movie.runtime}</h3>
            <p>{movie.description_full}</p>
            <p>{movie.genres}</p>
            <img src={movie.large_cover_image}></img>
        </div>
    )
}

export default Detail;