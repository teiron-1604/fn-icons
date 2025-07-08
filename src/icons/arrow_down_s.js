import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownS = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 15.707a1 1 0 01-1.414 0l-5.5-5.5a1 1 0 011.414-1.414L12 13.586l4.793-4.793a1 1 0 111.414 1.414l-5.5 5.5z"
      ></path>
    </svg>
  );
};

ArrowDownS.propTypes = {
  color: PropTypes.string
};

export default ArrowDownS;
