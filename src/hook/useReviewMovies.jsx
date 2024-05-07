import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

//영화 리뷰 관련 커스텀 훅
const fetchMovieReviews = ({ id }) => {
  return api.get(`/movie/${id}/reviews`);
};
export const useMovieReviewsQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-review", { id }],
    queryFn: () => fetchMovieReviews({ id }),
    select: (result) => result.data.results,
  });
};
