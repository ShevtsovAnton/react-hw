import { useEffect } from 'react';

export default function useDetailedMovieLogger(movie) {
  useEffect(() => {
    if (movie) {
      console.log(movie.title);
    }
  }, [movie]);
}
