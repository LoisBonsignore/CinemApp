import React, { useState, useEffect } from 'react'
// components
import Card from '../../components/Card/Card'
// styles
import "./Home.css"

export default function Home() {
    const [movies, setMovies] = useState()

    // fetch of most popular movies
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c89646cb9c2f9f7a6144c074fff0e9c7&language=fr-FR&page=1")
            .then(res => res.json())
            .then(data => setMovies(data))



    }, [])


    return (
        <section>
            <div className='home-container'>
                <h1>Les 10 films les plus populaires du moment</h1>
                <div className='film-list'>
                    {movies?.results?.slice(0, 10).map((movie) => {
                        return (
                            <Card key={movie.id} movie={movie} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
