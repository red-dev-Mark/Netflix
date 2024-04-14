import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTrailerMovie = (id) => {
  return api.get(`/movie/${id}/videos`);
};

export const useTrailerMovieQuery = (id) => {
  return useQuery({
    queryKey: ["movie-trailer"],
    queryFn: () => fetchTrailerMovie(id),
    select: (result) => result.data.results[0].key,
  });
};
