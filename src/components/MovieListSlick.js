import React from "react";
import Slider from "react-slick";
import {SampleNextArrow, SamplePrevArrow} from './PrevNextArrows';
import { Link } from 'react-router-dom';

const MovieListSlick = ({ movies, title }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="movie__container">
      <h2 className="page__title"> { title } </h2>
      <Slider {...settings}>
        {movies &&
          movies.map(movie => {
            return (
              <div key={movie.id} className="movie__wrapper">
                <div className="movie__inner">
                  <div className="movie__image">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                      }
                      alt="Movie Poster"
                    />
                  </div>
                  <div className="movie__name">
                    <h4>{movie.title}</h4>
                  </div>
                  <div className="movie__ratings">
                    <span>{movie.vote_average}</span>
                    <Link className="nav-link" to={"/" + movie.id}>
                      Show more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default MovieListSlick;