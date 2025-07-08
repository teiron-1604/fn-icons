import React from 'react';
import PropTypes from 'prop-types';

const CalendarFill = props => {
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
      <g clipPath="url(#clip0_18_14031)">
        <path d="M22 20a3 3 0 01-3 3H5a3 3 0 01-3-3v-9h20v9zM16 1a1 1 0 011 1v1h2a3 3 0 013 3v3H2V6a3 3 0 013-3h2V2a1 1 0 012 0v1h6V2a1 1 0 011-1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14031">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CalendarFill.propTypes = {
  color: PropTypes.string
};

export default CalendarFill;
