const getSortedMovies = (movies, sortBy) => {
  const sortedMovies = [
    ...movies.sort((a, b) => {
      const valueA = a[sortBy].toString().toUpperCase();
      const valueB = b[sortBy].toString().toUpperCase();
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

export default { getSortedMovies };
