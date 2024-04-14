import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useRecommendMoviesQuery } from "../../../hook/useRecommendMovies";
import MovieCard from "../../../common/MovieCard/MovieCard";
import "./MovieRecommend.css";

export default function MovieRecommend() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useRecommendMoviesQuery({
    id,
  });
  console.log(data);
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
  return (
    <div className="movie-recommendation">
      <h2>Movie Recommend</h2>
      <div className="recommendation">
        {data?.map((recommendation, index) => (
          <MovieCard
            key={index}
            movie={{
              id: recommendation.id,
              title: recommendation.title,
              poster_path: recommendation.poster_path, // 변경된 부분
              vote_average: recommendation.vote_average,
              popularity: recommendation.popularity,
              adult: recommendation.adult,
              genre_ids: recommendation.genre_ids,
            }}
          />
        ))}
      </div>
    </div>
  );
}
