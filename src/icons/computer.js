import React from 'react';
import PropTypes from 'prop-types';

const Computer = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1H4zm9 14h7a3 3 0 003-3V5a3 3 0 00-3-3H4a3 3 0 00-3 3v10a3 3 0 003 3h7v2H8a1 1 0 100 2h8a1 1 0 100-2h-3v-2z"
      ></path>
    </svg>
  );
};

Computer.propTypes = {
  color: PropTypes.string
};

export default Computer;
