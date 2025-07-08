import React from 'react';
import PropTypes from 'prop-types';

const CameraOffFill = props => {
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
      <g clipPath="url(#clip0_18_15102)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.707 1.293a1 1 0 00-1.414 1.414L4.586 6H4a3 3 0 00-3 3v9a3 3 0 003 3h15.586l1.707 1.707a1 1 0 001.414-1.414l-20-20zm11.907 14.735l-5.642-5.642a4 4 0 005.642 5.642zM23 9v7.579a.5.5 0 01-.854.353L8.66 3.446l.072-.086A1 1 0 019.5 3h5a1 1 0 01.768.36l2.2 2.64H20a3 3 0 013 3z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15102">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CameraOffFill.propTypes = {
  color: PropTypes.string
};

export default CameraOffFill;
