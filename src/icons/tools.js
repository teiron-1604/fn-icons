import React from 'react';
import PropTypes from 'prop-types';

const Tools = props => {
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
      <g clipPath="url(#clip0_1371_160)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.56 3.028a5 5 0 00-5.118 7.03 1 1 0 01-.204 1.119l-6.91 6.91a1.121 1.121 0 001.586 1.586l6.91-6.91a1 1 0 011.12-.204 5 5 0 007.03-5.117L18.4 10.014a2 2 0 01-2.8 0l-.007-.007L13.987 8.4a2 2 0 010-2.8l.007-.007 2.565-2.565zm-1.817-1.919a7 7 0 014.14.51 1 1 0 01.295 1.618L15.415 7l1.586 1.586 3.763-3.763a1 1 0 011.618.294 7 7 0 01-8.606 9.522l-6.448 6.448a3.121 3.121 0 11-4.414-4.414l6.448-6.448a7 7 0 015.38-9.116z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1371_160">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Tools.propTypes = {
  color: PropTypes.string
};

export default Tools;
