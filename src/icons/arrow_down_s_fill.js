import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownSFill = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M18.924 8.617a1 1 0 01-.217 1.09l-6 6a1 1 0 01-1.414 0l-6-6A1 1 0 016 8h12a1 1 0 01.924.617z"></path>
    </svg>
  );
};

ArrowDownSFill.propTypes = {
  color: PropTypes.string
};

export default ArrowDownSFill;
