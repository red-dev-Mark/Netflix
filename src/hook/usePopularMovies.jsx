import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// 인기 영화 커스텀 훅
const fetchPopularMovies = () => {
  // return api.get(`/movie/popular`);
  return api.get(`/movie/popular?language=ko`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    //필요한 값만!! result.data
    select : (result) => result.data
  });
};
