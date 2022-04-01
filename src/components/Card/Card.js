//function import
import genreConverter from "../../utils/genreConverter"
//styles
import "./Card.css"
//logo
import star from "../../assets/star.svg"


export default function Card({ movie }) {

    return (
        <section>
            <div className='card'>
                <img src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path} alt="affiche" />
                <div className="title">
                    <h3>{movie?.title}</h3>
                    <p>{movie?.vote_average} / 10 <img src={star} alt="étoile" /></p>
                </div>
                <div className="genres-container">{genreConverter(movie)}</div>
                {movie.overview ? <p>{movie?.overview.substring(0, 120)}...</p> : <p>Résumé non disponible : (</p>}
            </div>
        </section>
    )
}
