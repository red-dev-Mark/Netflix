import React from "react";
import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies";
import { Alert } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMovieSlide.css";

export default function PopularMovieSlide() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  // const { data, isLoading, isError, error } = useGenreIdsQuery();

  //조건부 렌더링
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  //데이터 존재성 검사
  if (!(data && data.results && data.results.length !== 0)) {
    return <div>No data available</div>;
  }
  console.log(data.results[0].genre_ids);
  return (
    <div className="popular-movie-slide">
      <h2>Popular Movie</h2>
      <Carousel
        infinite={true} // 무한반복
        centerMode={true}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {/* <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div> */}
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
      ;
    </div>
  );
}
