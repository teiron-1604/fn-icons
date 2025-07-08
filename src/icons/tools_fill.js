import React from 'react';
import PropTypes from 'prop-types';

const ToolsFill = props => {
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
      <g clipPath="url(#clip0_1371_159)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.743 1.11a7 7 0 014.14.509 1 1 0 01.295 1.618L15.415 7l1.586 1.586 3.763-3.763a1 1 0 011.618.294 7 7 0 01-8.606 9.522l-6.448 6.448a3.121 3.121 0 11-4.414-4.414l6.448-6.448a7 7 0 015.38-9.116z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1371_159">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ToolsFill.propTypes = {
  color: PropTypes.string
};

export default ToolsFill;
