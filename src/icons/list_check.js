import React from 'react';
import PropTypes from 'prop-types';

const ListCheck = props => {
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
      <g clipPath="url(#clip0_18_14350)">
        <path d="M3.01 17l.102.005a1 1 0 010 1.99L3.01 19H3a1 1 0 110-2h.01zM21 17a1 1 0 110 2H8a1 1 0 110-2h13zM3.01 11l.102.005a1 1 0 010 1.99L3.01 13H3a1 1 0 110-2h.01zM21 11a1 1 0 110 2H8a1 1 0 110-2h13zM3.01 5l.102.005a1 1 0 010 1.99L3.01 7H3a1 1 0 010-2h.01zM21 5a1 1 0 110 2H8a1 1 0 010-2h13z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14350">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ListCheck.propTypes = {
  color: PropTypes.string
};

export default ListCheck;
