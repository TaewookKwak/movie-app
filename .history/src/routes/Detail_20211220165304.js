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
                <h1 className={styles.logoName}>MOVIES</h1>
            </header>
            <main>
                <section>
                    <div className={styles.info}>
                        <h1 className={styles.title}>{movie.title_long}</h1>
                        <h3 className={styles.year}>{movie.year}</h3>
                        <h3 className={styles.rating}>{movie.rating}</h3>
                        <h3 className={styles.runtime}>{movie.runtime}</h3>
                        <ul className={styles.genres}>
                            {movie.genres.map(g => 
                                <li className={styles.genre} key ={g}>
                                    {g}
                                </li>
                                )}
                        </ul>
                    </div>
                    <p className={styles.description}>{movie.description_full}</p>
                </section>
                <section>
                    <img src={movie.large_cover_image}></img>
                </section>
            </main>
        </div>
    )
}

export default Detail;