import React from "react";
import { Alert, Spinner, Container, Row, Col, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import MovieReview from "./components/MovieReview";
import MovieRecommend from "./components/MovieRecommend";
import { useDetailMoviesQuery } from "../../hook/useDetailMovies";

export default function MovieDetail() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useDetailMoviesQuery({ id });
  // console.log(data);

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
    <div className="movie-detail">
      <Container>
        <Row>
          <Col>
            <img
              className="movie-detail-img"
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${
                data && data.poster_path
              }`}
              alt=""
            />
          </Col>
          <Col>
            <div className="movie-detail-title">
              <h2>{data && data.title}</h2>
              <div>{data && data.overview}</div>
            </div>
            <div className="movie-detail-genre">
              {data?.genres.map((item, index) => (
                <Badge className="badge" bg="danger" key={index}>
                  {item?.name}
                </Badge>
              ))}
            </div>
            <div className="movie-detail-info">
              <h5>상영 시간: {data && data.runtime}분</h5>
              <h5>개봉일: {data && data.release_date}</h5>
              <h5>평점 : {Math.round(data && data.vote_average)} / 10</h5>
              <h5>관객수 : {data && data.popularity * 1000}명</h5>
              <h5>
                연령제한 :{" "}
                {data && data.adult ? "청소년 관람불가" : "전체이용가"}
              </h5>
            </div>
          </Col>
        </Row>
        <Row>
          <MovieRecommend />
        </Row>
        <Row>
          <MovieReview />
        </Row>
      </Container>
    </div>
  );
}
