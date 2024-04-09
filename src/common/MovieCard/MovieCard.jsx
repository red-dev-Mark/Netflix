import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.css";
import { useMovieGenreQuery } from "../../hook/useMovieGenre";

export default function MovieCard({ movie }) {
  // let totalPoint = 10;
  // let pointAverage = movie.vote_average.toFixed(1);
  // let starAverage = Math.round(movie.vote_average / 2);
  // let totalStar = "";

  // (function () {
  //   for (let i = 0; i < starAverage; i++) totalStar += "⭐️";
  //   for (let j = 0; j < 5 - starAverage; j++) totalStar += "★";
  // })();

  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreList) => {
    if (!genreData) return [];
    let genreNameList = genreList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}")`,
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h3>{movie.title}</h3>
          {showGenre(movie?.genre_ids).map((name, id) => (
            <Badge className="ageBadge" bg="danger" key={id}>
              {name}
            </Badge>
          ))}
        {/* {movie.genre_ids.map((id) => (
          <Badge className="ageBadge" bg="danger" key={id}>
            {id}
          </Badge>
        ))} */}
        <div>
          <div>평점 : {Math.round(movie.vote_average)} / 10</div>
          <div>
            관객수 : {(movie.popularity * 1000).toLocaleString("ko-KR")}명
          </div>
          <div>
            연령제한 : {movie.adult ? "청소년 관람불가" : "전체 이용가"}
          </div>
          {/* <p>{movie.overview}</p> */}
        </div>
      </div>
    </div>
  );
}
