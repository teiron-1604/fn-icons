import React from 'react';
import PropTypes from 'prop-types';

const CheckboxMultipleFill = props => {
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
      <g clipPath="url(#clip0_18_14588)">
        <path d="M20 7a3 3 0 013 3v10a3 3 0 01-3 3H10a3 3 0 01-3-3V10a3 3 0 013-3h10zm-1.293 5.293a1 1 0 00-1.338-.068l-.076.068L14 15.586l-1.293-1.293-.076-.068a1 1 0 00-1.406 1.406l.068.076 2 2 .076.068a1 1 0 001.338-.068l4-4 .068-.076a1 1 0 00-.068-1.338zM14 1c1.652 0 3 1.348 3 3a1 1 0 11-2 0c0-.548-.452-1-1-1H4c-.548 0-1 .452-1 1v10c0 .548.452 1 1 1a1 1 0 110 2c-1.652 0-3-1.348-3-3V4c0-1.652 1.348-3 3-3h10z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14588">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CheckboxMultipleFill.propTypes = {
  color: PropTypes.string
};

export default CheckboxMultipleFill;
