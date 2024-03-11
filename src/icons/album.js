import React from 'react';
import PropTypes from 'prop-types';

const Album = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M12 20a8 8 0 100-16.001A8 8 0 0012 20zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-8a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z"></path>
    </svg>
  );
};

Album.propTypes = {
  color: PropTypes.string
};

Album.defaultProps = {
  color: 'currentColor'
};

export default Album;
