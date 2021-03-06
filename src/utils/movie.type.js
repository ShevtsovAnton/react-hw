import PropTypes from 'prop-types';

const movieType = PropTypes.shape({
  runtime: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number,
  mediaType: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number
});

export default movieType;
