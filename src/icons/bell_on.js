import React from 'react';
import PropTypes from 'prop-types';

const BellOn = props => {
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
        d="M7.05 3.05A7 7 0 0119 8c0 2.145.335 3.479.775 4.41.44.932 1.016 1.534 1.682 2.22l.022.024A2 2 0 0119.999 18H4a2.002 2.002 0 01-1.973-2.323 2 2 0 01.517-1.047c.665-.686 1.24-1.288 1.68-2.22C4.664 11.478 5 10.144 5 8a7 7 0 012.05-4.95zM12 3a5 5 0 00-5 5c0 2.354-.37 3.998-.968 5.264-.59 1.248-1.371 2.055-2.029 2.733L4.001 16h15.998c-.66-.68-1.442-1.487-2.033-2.736C17.368 11.998 17 10.354 17 8a5 5 0 00-5-5zM9.766 20.134a1 1 0 011.366.366 1 1 0 001.732 0 1 1 0 011.732 1 3 3 0 01-5.196 0 1 1 0 01.366-1.366z"
      ></path>
    </svg>
  );
};

BellOn.propTypes = {
  color: PropTypes.string
};

export default BellOn;
