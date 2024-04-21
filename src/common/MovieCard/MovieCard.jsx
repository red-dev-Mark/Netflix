import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.css";
import { useMovieGenreQuery } from "../../hook/useMovieGenre";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  //data: genreData -> data에서 genreData로 이름 재정의
  const { data: genreData } = useMovieGenreQuery() || {};
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
      // return (genreData.find((genre) => genre.id === id)).name;
    });
    return genreNameList;
  };

  const goDetailMovies = (id) => {
    navigate(`/movies/${id}`);
  };
  // console.log(genreData);

  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}")`,
      }}
      className="movie-card"
      onClick={() => goDetailMovies(movie.id)}
    >
      <div className="overlay">
        <h3>{movie.title}</h3>
        <div>
          {showGenre(movie?.genre_ids).map((name, id) => (
            <Badge className="ageBadge" bg="danger" key={id}>
              {name}
            </Badge>
          ))}
        </div>
        <div>
          <div>평점 : {Math.round(movie.vote_average)} / 10</div>
          <div>
            관객수 : {(movie.popularity * 1000).toLocaleString("ko-KR")}명
          </div>
          <div>연령제한 : {movie.adult ? "청소년 관람불가" : "전체이용가"}</div>
          {/* <p>{movie.overview}</p> */}
        </div>
      </div>
    </div>
  );
}
