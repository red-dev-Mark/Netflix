import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";

//영화 추천 관련 커스텀 훅
const fetchRecommendMovies = ({ id }) => {
  return api.get(`/movie/${id}/recommendations`);
};

export const useRecommendMoviesQuery = ({ id }) => {
  return useQuery({
    queryKey: ["recommend-movies", { id }],
    queryFn: () => fetchRecommendMovies({ id }),
    select: (result) => result.data.results,
  });
};
