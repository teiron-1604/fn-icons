import React from 'react';
import PropTypes from 'prop-types';

const HomeFill = props => {
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
      <path d="M11.386 1.21c.36-.28.867-.28 1.228 0l9 7c.244.19.386.482.386.79v11a3 3 0 01-3 3H5a3 3 0 01-3-3V9c0-.308.142-.6.386-.79l9-7z"></path>
    </svg>
  );
};

HomeFill.propTypes = {
  color: PropTypes.string
};

export default HomeFill;
