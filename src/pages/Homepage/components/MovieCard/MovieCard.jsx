import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}")`,
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h3>{movie.title}</h3>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger" key={id}>
            {id}
          </Badge>
        ))}
        <div>
          <div>평점 : {Math.round(movie.vote_average)} / 10</div>
          <div>
            관객수 : {(movie.popularity * 1000).toLocaleString("ko-KR")}명
          </div>
          <div>
            연령제한 : {movie.adult ? "청소년 관람불가" : "전체 이용가"}
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
