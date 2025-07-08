import React from 'react';
import PropTypes from 'prop-types';

const CodeBoxFill = props => {
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
      <g clipPath="url(#clip0_308_57)">
        <path d="M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-8.375 6.719a1.001 1.001 0 00-1.406.156l-2 2.5a1.001 1.001 0 000 1.25l2 2.5.068.076a1 1 0 001.554-1.243l-.06-.083L9.281 12l1.5-1.875a1 1 0 00-.156-1.406zm4.088.08a1 1 0 00-1.554 1.243l.06.083 1.5 1.875-1.5 1.875a1.001 1.001 0 001.562 1.25l2-2.5a1 1 0 000-1.25l-2-2.5-.068-.076z"></path>
      </g>
      <defs>
        <clipPath id="clip0_308_57">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CodeBoxFill.propTypes = {
  color: PropTypes.string
};

export default CodeBoxFill;
