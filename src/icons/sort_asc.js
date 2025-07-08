import React from 'react';
import PropTypes from 'prop-types';

const SortAsc = props => {
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
      <g clipPath="url(#clip0_18_14320)">
        <path d="M6 20a1 1 0 102 0V6.414l2.293 2.293a1 1 0 101.414-1.414l-4-4a1 1 0 00-1.338-.068l-.076.068-4 4-.069.076a1 1 0 001.407 1.406l.076-.068L6 6.414V20zm9-7a1 1 0 100-2h-4a1 1 0 100 2h4zm3 4a1 1 0 000-2h-7a1 1 0 100 2h7zm3 4a1 1 0 000-2H11a1 1 0 100 2h10z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14320">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SortAsc.propTypes = {
  color: PropTypes.string
};

export default SortAsc;
