import React from 'react';
import PropTypes from 'prop-types';

const SendPlane = props => {
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
      <g clipPath="url(#clip0_18_15762)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.707 1.293a1 1 0 01.237 1.037l-7 20a1 1 0 01-1.858.076l-3.844-8.648-8.648-3.844a1 1 0 01.076-1.858l20-7a1 1 0 011.037.237zM12.193 13.22l2.696 6.068 4.72-13.483-7.416 7.416zm6.001-8.83L4.711 9.111l6.067 2.696 7.416-7.416z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15762">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SendPlane.propTypes = {
  color: PropTypes.string
};

export default SendPlane;
