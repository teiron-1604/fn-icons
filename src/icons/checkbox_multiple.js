import React from 'react';
import PropTypes from 'prop-types';

const CheckboxMultiple = props => {
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
      <g clipPath="url(#clip0_18_14584)">
        <path d="M21 10a1 1 0 00-1-1H10a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V10zm-3.707 2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2-.068-.076a1 1 0 011.406-1.406l.076.068L14 15.586l3.293-3.293zM15 4c0-.548-.452-1-1-1H4c-.548 0-1 .452-1 1v10c0 .548.452 1 1 1a1 1 0 110 2c-1.652 0-3-1.348-3-3V4c0-1.652 1.348-3 3-3h10c1.652 0 3 1.348 3 3a1 1 0 11-2 0zm8 16a3 3 0 01-3 3H10a3 3 0 01-3-3V10a3 3 0 013-3h10a3 3 0 013 3v10z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14584">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CheckboxMultiple.propTypes = {
  color: PropTypes.string
};

export default CheckboxMultiple;
