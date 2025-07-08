import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropUp = props => {
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
        d="M10.793 9.293a1 1 0 011.414 0l3.5 3.5a1 1 0 01-1.414 1.414L11.5 11.414l-2.793 2.793a1 1 0 01-1.414-1.414l3.5-3.5z"
      ></path>
    </svg>
  );
};

ArrowDropUp.propTypes = {
  color: PropTypes.string
};

export default ArrowDropUp;
