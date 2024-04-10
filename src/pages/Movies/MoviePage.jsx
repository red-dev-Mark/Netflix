import React, { useState } from "react";
import "./MoviePage.css";
import { useSearchMovieQuery } from "../../hook/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert, Spinner, Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";

// 경로 2가지
//1. nav바에서 클릭해서 온 경우 => 이런 경우는 PopularMovies 보여주기
//2. keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

//1번의 경우, keyword가 없는 경우 알아서 PopularMovies 보여줘야하는데,
//사실 이런 경우는 백엔드에서 하는 것이지만, TMDB에서 요청이 안되니 따로 해보자

export default function MoviePage() {
  const [page, setPage] = useState(1);

  //keyword는 url의 쿼리에서 읽어옴
  const [query] = useSearchParams();
  const keyword = query.get("q");

  const handlePageClick = (page) => {
    setPage(page.selected + 1);
  };

  //만약 keyword가 없다면 null
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
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
  if (!(data && data.results && data.results.length !== 0)) {
    return <div>No data available</div>;
  }
  //   console.log(data);

  return (
    <div>
      <Container>
        <Row>
          {/*필터 */}
          <Col lg={4} xs={12}></Col>
          {/*영화 카드 */}
          <Col lg={8} xs={12}>
            <Row>
              {data?.results
                .filter((movie) => movie.poster_path)
                .map((movie) => {
                  return (
                    <Col key={movie.id} lg={4} xs={12}>
                      <MovieCard movie={movie} />
                    </Col>
                  );
                })}
            </Row>
          </Col>

          <ReactPaginate
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={10}
            marginPagesDisplayed={2}
            pageCount={data.total_pages}
            previousLabel="previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            //현재 페이지
            //하지만 리액트 페이지네이션은 0부터 시작함
            //따라서 -1을 해줘야함
            forcePage={page - 1}
          />
        </Row>
      </Container>
    </div>
  );
}
