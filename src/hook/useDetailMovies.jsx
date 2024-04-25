import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// 영화 디테일 페이지 커스텀 훅
const fetchDetailMovies = ({ id }) => {
  return api.get(`/movie/${id}?language=ko`);
};

export const useDetailMoviesQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-detail", { id }],
    queryFn: () => fetchDetailMovies({ id }),
    select: (result) => result.data,
  });
};
