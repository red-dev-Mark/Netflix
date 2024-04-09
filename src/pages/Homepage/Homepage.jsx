import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import UpComingMovieSlide from "./components/UpComingMovieSlide/UpComingMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedSlide/TopRatedMovieSlide";

//1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
//2. popular movie
//3. top rated movie
//4. upcoming movie

export default function Homepage() {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpComingMovieSlide />
    </div>
  );
}
