import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpComingMovies = () => {
  return api.get(`/movie/upcoming?language=ko`);
};

export const useUpComingMoviesQuery = () => {
  return useQuery({
    queryKey: ["upcoming"],
    queryFn: fetchUpComingMovies,
    select : (result) => result.data
  });
};
