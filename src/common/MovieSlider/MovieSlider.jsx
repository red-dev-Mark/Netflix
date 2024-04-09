import React from "react";
import "./MovieSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";

export default function MovieSlider({ title, movies, responsive }) {
  return (
    <div>
      <h2>{title}</h2>
      {movies && movies.length > 0 ? (
        <Carousel
          infinite={true} // 무한반복
          centerMode={true}
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          responsive={responsive}
        >
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </Carousel>
      ) : (
        <p>No movies to display</p>
      )}
    </div>
  );
}
