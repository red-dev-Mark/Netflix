import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// 경로 2가지
//1. nav바에서 클릭해서 온 경우 => 이런 경우는 PopularMovies 보여주기
//2. keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

const fetchSearchMovie = ({ keyword }) => {
  //TMDB - Search - Movie
  return keyword
    ? api.get(`/search/movie?query=${keyword}`)
    : api.get(`/movie/popular?language=ko`);
};

export const useSearchMovieQuery = ({ keyword }) => {
  return useQuery({
    //이번에는 조금 다름, 키워드에 따라서 url이 달라짐
    queryKey: ["movie-search", keyword],
    queryFn: () => fetchSearchMovie({ keyword }),
    select: (result) => result.data,
  });
};
 