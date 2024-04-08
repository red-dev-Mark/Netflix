import React from "react";
import "./App.css";
import AppLayOut from "./layout/AppLayOut";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Movies from "./pages/Movies/Movies";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

//페이지 라우터 구성
//홈페이지 : /
//영화 전체 보여주는 페이지 (서치) : /movies
//영화 디테일 페이지 : /movies/:id
//추천 영화 : /movies/:id/recommandion
//... 이렇게 여러 페이지일 수 있다
//그럼 계속 /.../.../을 사용할 것인가?

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayOut />}>
          <Route index element={<Homepage />} />
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}
