//styles
import "./Card.css"
//logo
import star from "../../assets/star.svg"


export default function Card({ movie }) {

    // conversion function of genre id to genre name
    const genreConverter = () => {
        let genreArray = [];
        for (let i = 0; i < movie.genre_ids?.length; i++) {
            switch (movie.genre_ids[i]) {
                case 28:
                    genreArray.push(`Action`);
                    break;
                case 12:
                    genreArray.push(`Aventure`);
                    break;
                case 16:
                    genreArray.push(`Animation`);
                    break;
                case 35:
                    genreArray.push(`Comédie`);
                    break;
                case 80:
                    genreArray.push(`Policier`);
                    break;
                case 99:
                    genreArray.push(`Documentaire`);
                    break;
                case 18:
                    genreArray.push(`Drame`);
                    break;
                case 10751:
                    genreArray.push(`Famille`);
                    break;
                case 14:
                    genreArray.push(`Fantasy`);
                    break;
                case 36:
                    genreArray.push(`Histoire`);
                    break;
                case 27:
                    genreArray.push(`Horreur`);
                    break;
                case 10402:
                    genreArray.push(`Musique`);
                    break;
                case 9648:
                    genreArray.push(`Mystère`);
                    break;
                case 10749:
                    genreArray.push(`Romance`);
                    break;
                case 878:
                    genreArray.push(`Science-fiction`);
                    break;
                case 10770:
                    genreArray.push(`Téléfilm`);
                    break;
                case 53:
                    genreArray.push(`Thriller`);
                    break;
                case 10752:
                    genreArray.push(`Guerre`);
                    break;
                case 37:
                    genreArray.push(`Western`);
                    break;
                default:
                    break;
            }
        }
        return genreArray.map((genre) => <p className="genres" key={genre}>{genre}</p>);
    };

    return (
        <section>
            <div className='card'>
                <img src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path} alt="affiche" />
                <div className="title">
                    <h3>{movie?.title}</h3>
                    <p>{movie?.vote_average} / 10 <img src={star} alt="étoile" /></p>
                </div>
                <div className="genres-container">{genreConverter()}</div>
                {movie.overview ? <p>{movie?.overview.substring(0, 120)}...</p> : <p>Résumé non disponible : (</p>}
            </div>
        </section>
    )
}
