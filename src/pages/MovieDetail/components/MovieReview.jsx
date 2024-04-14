import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMovieReviewsQuery } from "../../../hook/useReviewMovies";
import "./MovieReview.css";

export default function MovieReview() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieReviewsQuery({ id });
  //   console.log(data);

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
    <div className="movie-review">
      <h2>Reviews</h2>
      <div className="review-container">
        {data?.map((item, index) => (
          <div className="review" key={index}>
            <div>{item?.author}</div>
            <div>{item?.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
