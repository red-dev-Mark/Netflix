import React from "react";
import { useUpComingMoviesQuery } from "../../../../hook/useUpComingMovies";
import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

export default function UpComingMovieSlide() {
  const { data, isLoading, isError, error } = useUpComingMoviesQuery();

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
  return (
    <div>
      <MovieSlider
        title="Top Rated Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
}
