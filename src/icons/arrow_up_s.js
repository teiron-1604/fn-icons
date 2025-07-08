import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpS = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.793 8.293a1 1 0 011.414 0l5.5 5.5a1 1 0 01-1.414 1.414L11.5 10.414l-4.793 4.793a1 1 0 01-1.414-1.414l5.5-5.5z"
      ></path>
    </svg>
  );
};

ArrowUpS.propTypes = {
  color: PropTypes.string
};

export default ArrowUpS;
