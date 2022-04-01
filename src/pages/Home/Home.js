import React, { useState, useEffect } from 'react'
// Swiper
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// components
import Card from '../../components/Card/Card'
import Diapo from '../../components/Diapo/Diapo'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// styles
import "./Home.css"


export default function Home() {
    const [movies, setMovies] = useState()

    // fetch of most popular movies
    useEffect(() => {
        const tempMovies = []
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c89646cb9c2f9f7a6144c074fff0e9c7&language=fr-FR&page=1")
            .then(res => res.json())
            .then(data => {
                data?.results.forEach((data) => {
                    tempMovies.push({ ...data })
                })
            })

        // fetch of most popular movies page 2
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c89646cb9c2f9f7a6144c074fff0e9c7&language=fr-FR&page=2")
            .then(res => res.json())
            .then(data => {
                data?.results.forEach((data) => {
                    tempMovies.push({ ...data })
                })
                setMovies(tempMovies)
            })

    }, [])


    return (
        <section>
            <div className='home-container'>
                <h1>Les 10 films les plus populaires du moment</h1>
                <div className='film-list'>
                    {movies?.slice(0, 10).map((movie) => {
                        return (
                            <Card key={movie.id} movie={movie} />
                        )
                    })}
                </div>
            </div>
            <div className='slider-general-container' id="slider">
                <h1>Slider des 30 autres films les plus populaires (Du 11 au 40ème)</h1>
                <div className='slider-container'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1200: {
                                width: 1200,
                                slidesPerView: 3,
                            },
                            600: {
                                width: 600,
                                slidesPerView: 2,
                            },
                            250: {
                                width: 250,
                                slidesPerView: 1,
                            }
                        }}
                    >
                        {movies?.slice(10, 40).map((movie) => {
                            return (
                                <SwiperSlide key={movie?.id}>
                                    <Diapo movie={movie} />
                                </SwiperSlide>
                            )
                        })}
                        ...
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
