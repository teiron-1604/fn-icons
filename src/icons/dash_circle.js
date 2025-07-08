import React from 'react';
import PropTypes from 'prop-types';

const DashCircle = props => {
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
        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 2a9 9 0 100 18 9 9 0 000-18zm4 8a1 1 0 110 2H8a1 1 0 110-2h8z"
        opacity=".9"
      ></path>
    </svg>
  );
};

DashCircle.propTypes = {
  color: PropTypes.string
};

export default DashCircle;
