import React from 'react';
import PropTypes from 'prop-types';

const Disc = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm7.54-4.873a1 1 0 01-.067 1.413C7.585 9.347 7 10.577 7 12a1 1 0 11-2 0c0-1.977.815-3.747 2.127-4.94a1 1 0 011.413.067zM12 11a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0zm9-1a1 1 0 011 1c0 1.977-.816 3.747-2.127 4.94a1 1 0 01-1.346-1.48C16.415 14.653 17 13.423 17 12a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

Disc.propTypes = {
  color: PropTypes.string
};

export default Disc;
