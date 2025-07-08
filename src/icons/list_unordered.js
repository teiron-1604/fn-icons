import React from 'react';
import PropTypes from 'prop-types';

const ListUnordered = props => {
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
      <g clipPath="url(#clip0_18_14360)">
        <path d="M2.01 19l.102.005a1 1 0 010 1.99L2.01 21H2a1 1 0 110-2h.01zM22 19a1 1 0 110 2H7a1 1 0 110-2h15zM2.01 11l.102.005a1 1 0 010 1.99L2.01 13H2a1 1 0 110-2h.01zM22 11a1 1 0 110 2H7a1 1 0 110-2h15zM2.01 3l.102.005a1 1 0 010 1.99L2.01 5H2a1 1 0 010-2h.01zM22 3a1 1 0 110 2H7a1 1 0 010-2h15z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14360">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ListUnordered.propTypes = {
  color: PropTypes.string
};

export default ListUnordered;
