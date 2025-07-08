import React from 'react';
import PropTypes from 'prop-types';

const WifiOnFill2 = props => {
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
        d="M12 7c-3.16 0-6.194 1.239-8.45 3.45a1.5 1.5 0 01-2.1-2.142 15.071 15.071 0 0121.1 0 1.5 1.5 0 01-2.1 2.143A12.071 12.071 0 0012 7zm0 6.785a5.286 5.286 0 00-3.7 1.51 1.5 1.5 0 01-2.1-2.142 8.286 8.286 0 0111.6 0 1.5 1.5 0 01-2.1 2.143 5.286 5.286 0 00-3.7-1.511zm-1.5 5.286a1.5 1.5 0 011.5-1.5h.014a1.5 1.5 0 110 3H12a1.5 1.5 0 01-1.5-1.5z"
      ></path>
    </svg>
  );
};

WifiOnFill2.propTypes = {
  color: PropTypes.string
};

export default WifiOnFill2;
