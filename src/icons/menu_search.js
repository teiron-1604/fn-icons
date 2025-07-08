import React from 'react';
import PropTypes from 'prop-types';

const MenuSearch = props => {
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
      <g clipPath="url(#clip0_550_28)">
        <path d="M19 15a2 2 0 10-.734 1.547 1.008 1.008 0 01.28-.281A1.99 1.99 0 0019 15zm-9 2a1 1 0 110 2H4a1 1 0 110-2h6zm0-6a1 1 0 110 2H4a1 1 0 110-2h6zm10-6a1 1 0 110 2H4a1 1 0 010-2h16zm1 10a3.98 3.98 0 01-.555 2.031l1.262 1.262.068.076a1 1 0 01-1.406 1.406l-.076-.068-1.263-1.262A4 4 0 1121 15z"></path>
      </g>
      <defs>
        <clipPath id="clip0_550_28">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

MenuSearch.propTypes = {
  color: PropTypes.string
};

export default MenuSearch;
