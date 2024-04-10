import React from "react";
import { useTopRatedMoviesQuery } from "../../../../hook/useTopRatedMovies";
import { Alert, Spinner } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../../../constants/responsive";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
export default function TopRatedMovieSlide() {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  //조건부 렌더링
  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
    );
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
