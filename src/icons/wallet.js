import React from 'react';
import PropTypes from 'prop-types';

const Wallet = props => {
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
      <path d="M22 7h1v10h-1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v3zm-2 10h-6a5 5 0 110-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 000 6h7zm-7-4h3v2h-3v-2z"></path>
    </svg>
  );
};

Wallet.propTypes = {
  color: PropTypes.string
};

export default Wallet;
