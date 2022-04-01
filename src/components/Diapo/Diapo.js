// function import
import genreConverter from "../../utils/genreConverter"
// styles
import "./Diapo.css"

export default function Diapo({ movie }) {


    return (
        <div>
            <div className="slider-container">
                <div className='card'>
                    <img src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path} alt="affiche" />
                    <div className="title">
                        <h3>{movie?.title}</h3>
                    </div>
                    <div className="genres-container">{genreConverter(movie)}</div>
                    {movie.overview ? <p>{movie.overview.substring(0, 120)}...</p> : <p>Résumé non disponible : (</p>}
                </div>
            </div>
        </div>
    );
};