import PropTypes from 'prop-types';

const movieType = PropTypes.shape({
  backdropPath: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number,
  mediaType: PropTypes.string,
  movieUrl: PropTypes.string,
  overview: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  title: PropTypes.string.isRequired,
  voteAverage: PropTypes.number
});

export default movieType;
