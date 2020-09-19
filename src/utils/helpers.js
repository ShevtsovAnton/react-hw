const getSortedMovies = (movies, sortBy) => {
  const sortedMovies = [
    ...movies.sort((a, b) => {
      const valueA = a[sortBy] && a[sortBy].toString().toUpperCase();
      const valueB = b[sortBy] && b[sortBy].toString().toUpperCase();
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    })
  ];
  return sortedMovies;
};

const filterMovies = (movies, filter) => {
  if (filter === 'all') {
    return movies;
  }
  const filteredList = movies.filter(movie => {
    const formattedGenres = movie.genres.map(genre => genre.toUpperCase());
    return formattedGenres.includes(filter.toUpperCase());
  });
  return filteredList;
};

const search = (movies, query) => {
  if (query.trim() === '') {
    return movies;
  }
  const searchResults = movies.filter(movie =>
    movie.title.toUpperCase().includes(query.trim().toUpperCase())
  );
  return searchResults;
};

export { getSortedMovies, filterMovies, search };
