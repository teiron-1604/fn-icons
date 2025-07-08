import React from 'react';
import PropTypes from 'prop-types';

const CodeBox = props => {
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
      <g clipPath="url(#clip0_18_11599)">
        <path d="M20 5a1 1 0 00-1-1H5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5zM9.219 8.875a1 1 0 011.562 1.25L9.281 12l1.5 1.875.06.083a1 1 0 01-1.554 1.243l-.068-.076-2-2.5a1 1 0 010-1.25l2-2.5zm4.156-.156a1 1 0 011.338.08l.068.076 2 2.5a1 1 0 010 1.25l-2 2.5a1 1 0 01-1.562-1.25l1.5-1.875-1.5-1.875-.06-.083a1 1 0 01.216-1.323zM22 19a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14a3 3 0 013 3v14z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_11599">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CodeBox.propTypes = {
  color: PropTypes.string
};

export default CodeBox;
