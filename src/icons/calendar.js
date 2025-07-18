import React from 'react';
import PropTypes from 'prop-types';

const Calendar = props => {
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
      <g clipPath="url(#clip0_18_14027)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 1a1 1 0 011 1v1h6V2a1 1 0 112 0v1h2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V6a3 3 0 013-3h2V2a1 1 0 011-1zM7 5H5a1 1 0 00-1 1v3h16V6a1 1 0 00-1-1h-2v1a1 1 0 11-2 0V5H9v1a1 1 0 01-2 0V5zm13 6H4v9a1 1 0 001 1h14a1 1 0 001-1v-9z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14027">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Calendar.propTypes = {
  color: PropTypes.string
};

export default Calendar;
