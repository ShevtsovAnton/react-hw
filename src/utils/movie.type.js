import PropTypes from 'prop-types';

const movieType = PropTypes.shape({
  backdropPath: PropTypes.string,
  duration: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number,
  mediaType: PropTypes.string,
  movieUrl: PropTypes.string,
  overview: PropTypes.string,
  posterPath: PropTypes.string,
  releaseDate: PropTypes.string,
  title: PropTypes.string,
  voteAverage: PropTypes.number
});

export default movieType;
