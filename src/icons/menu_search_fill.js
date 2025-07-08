import React from 'react';
import PropTypes from 'prop-types';

const MenuSearchFill = props => {
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
      <g clipPath="url(#clip0_550_27)">
        <path d="M10 17a1 1 0 110 2H4a1 1 0 110-2h6zm0-6a1 1 0 110 2H4a1 1 0 110-2h6zm10-6a1 1 0 110 2H4a1 1 0 010-2h16zm1 10a3.98 3.98 0 01-.555 2.031l1.262 1.262.068.076a1 1 0 01-1.406 1.406l-.076-.068-1.263-1.262A4 4 0 1121 15z"></path>
      </g>
      <defs>
        <clipPath id="clip0_550_27">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

MenuSearchFill.propTypes = {
  color: PropTypes.string
};

export default MenuSearchFill;
