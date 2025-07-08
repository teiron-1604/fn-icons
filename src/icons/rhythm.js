import React from 'react';
import PropTypes from 'prop-types';

const Rhythm = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M2 10a1 1 0 112 0v10a1 1 0 11-2 0V10zm6-6a1 1 0 012 0v16a1 1 0 11-2 0V4zm6 9a1 1 0 112 0v7a1 1 0 11-2 0v-7zm6-6a1 1 0 112 0v13a1 1 0 11-2 0V7z"></path>
    </svg>
  );
};

Rhythm.propTypes = {
  color: PropTypes.string
};

export default Rhythm;
