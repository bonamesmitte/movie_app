import React from 'react';
import PropTypes from 'prop-types';

function Movie(id, title, summary, genres, year, poster) {
  return <h1></h1>;
}

Movie.PropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};
