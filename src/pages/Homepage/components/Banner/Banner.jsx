import React from "react";
import "./Banner.css";
import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies";
import { Alert } from "react-bootstrap";

export default function Banner() {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  // console.log(data);

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
    <div
      style={{
        backgroundImage: `url("https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data.results[0].poster_path}")`,
        backgroundSize: "cover",
      }}
      className="banner"
    >
      <div className="text-white banner-text-area">
        <h1>{data.results[0].title}</h1>
        <p>{data.results[0].overview}</p>
      </div>
    </div>
  );
}
