import React from 'react';
import PropTypes from 'prop-types';

const CheckCircle = props => {
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
      <path d="M8 12l2.5 2.5 5-5M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm15.207-3.207a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 111.414-1.414l1.793 1.793 4.293-4.293a1 1 0 011.414 0z"
      ></path>
    </svg>
  );
};

CheckCircle.propTypes = {
  color: PropTypes.string
};

export default CheckCircle;
