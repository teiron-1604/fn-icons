import React from 'react';
import PropTypes from 'prop-types';

const SortDesc = props => {
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
      <g clipPath="url(#clip0_18_14325)">
        <path d="M6 4a1 1 0 112 0v13.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.338.068l-.076-.068-4-4-.069-.076a1 1 0 011.407-1.406l.076.068L6 17.586V4zm9 7a1 1 0 110 2h-4a1 1 0 110-2h4zm3-4a1 1 0 010 2h-7a1 1 0 110-2h7zm3-4a1 1 0 010 2H11a1 1 0 110-2h10z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14325">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SortDesc.propTypes = {
  color: PropTypes.string
};

export default SortDesc;
