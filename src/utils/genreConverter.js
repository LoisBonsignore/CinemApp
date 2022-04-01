// conversion function of genre id to genre name
function genreConverter(movie) {
    let genresArray = [];
    for (let i = 0; i < movie.genre_ids?.length; i++) {
        switch (movie.genre_ids[i]) {
            case 28:
                genresArray.push(`Action`);
                break;
            case 12:
                genresArray.push(`Aventure`);
                break;
            case 16:
                genresArray.push(`Animation`);
                break;
            case 35:
                genresArray.push(`Comédie`);
                break;
            case 80:
                genresArray.push(`Policier`);
                break;
            case 99:
                genresArray.push(`Documentaire`);
                break;
            case 18:
                genresArray.push(`Drame`);
                break;
            case 10751:
                genresArray.push(`Famille`);
                break;
            case 14:
                genresArray.push(`Fantasy`);
                break;
            case 36:
                genresArray.push(`Histoire`);
                break;
            case 27:
                genresArray.push(`Horreur`);
                break;
            case 10402:
                genresArray.push(`Musique`);
                break;
            case 9648:
                genresArray.push(`Mystère`);
                break;
            case 10749:
                genresArray.push(`Romance`);
                break;
            case 878:
                genresArray.push(`Science-fiction`);
                break;
            case 10770:
                genresArray.push(`Téléfilm`);
                break;
            case 53:
                genresArray.push(`Thriller`);
                break;
            case 10752:
                genresArray.push(`Guerre`);
                break;
            case 37:
                genresArray.push(`Western`);
                break;
            default:
                break;
        }
    }

    return genresArray.map((genre) => <p className="genres" key={genre}>{genre}</p>);
};

export default genreConverter;