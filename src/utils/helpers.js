import { useSelector } from 'react-redux';

const getSortedMovies = (movies, sortBy) => {
  const sortedMovies = [
    ...movies.sort((a, b) => {
      const valueA = a[sortBy] && a[sortBy].toString().toUpperCase();
      const valueB = b[sortBy] && b[sortBy].toString().toUpperCase();
      if (valueA < valueB) {
        return 1;
      }
      if (valueA > valueB) {
        return -1;
      }
      return 0;
    })
  ];
  return sortedMovies;
};

const getFilteredMovies = (movies, filter) => {
  if (filter === 'all') {
    return movies;
  }
  const filteredList = movies.filter(movie => {
    const formattedGenres = movie.genres.map(genre => genre.toUpperCase());
    return formattedGenres.includes(filter.toUpperCase());
  });
  return filteredList;
};

const getSearchedMovies = (movies, query) => {
  if (query.trim() === '') {
    return movies;
  }
  const searchResults = movies.filter(movie =>
    movie.title.toUpperCase().includes(query.trim().toUpperCase())
  );
  return searchResults;
};

const getMovie = id => {
  return useSelector(
    state =>
      state.movies.filter(movieItem => {
        return movieItem.id === id;
      })[0]
  );
};

export default getMovie;

export { getSortedMovies, getFilteredMovies, getSearchedMovies, getMovie };
