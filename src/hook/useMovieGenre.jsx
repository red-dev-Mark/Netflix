import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieGenre = () => {
  return api.get(`/genre/movie/list?language=ko`);
};

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMovieGenre,
    select: (result) => result.data.genres,
    //장르는 자주 업데이트되지 않음..
    //그런데 홈페이지로 갈때마다 계속 호출
    //5분
    staleTime: 3000000,
  });
};
