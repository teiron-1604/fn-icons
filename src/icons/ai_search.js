import React from 'react';
import PropTypes from 'prop-types';

const AiSearch = props => {
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
      <g clipPath="url(#clip0_1620_171)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 2a3 3 0 00-3 3v12a3 3 0 003 3h4.862c.827 0 1.342-.992 1.097-1.78a5.8 5.8 0 019.8-5.656c.308.332 1.241.094 1.241-.36V5a3 3 0 00-3-3H5zm7 3.3a.7.7 0 01.7.7v.8h.8a.7.7 0 110 1.4h-.8V9a.7.7 0 11-1.4 0v-.8h-.8a.7.7 0 110-1.4h.8V6a.7.7 0 01.7-.7zM7.5 9.2a.8.8 0 01.8.8v.7H9a.8.8 0 110 1.6h-.7v.7a.8.8 0 01-1.6 0v-.7H6a.8.8 0 010-1.6h.7V10a.8.8 0 01.8-.8zm9 4.8a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 16.5a4.5 4.5 0 118.31 2.396l1.397 1.397a1 1 0 01-1.414 1.414l-1.397-1.397A4.5 4.5 0 0112 16.5z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1620_171">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

AiSearch.propTypes = {
  color: PropTypes.string
};

export default AiSearch;
