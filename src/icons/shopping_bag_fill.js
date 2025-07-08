import React from 'react';
import PropTypes from 'prop-types';

const ShoppingBagFill = props => {
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
      <path d="M6.5 2h11a1 1 0 01.8.4L21 6v15a1 1 0 01-1 1H4a1 1 0 01-1-1V6l2.7-3.6a1 1 0 01.8-.4zm12 4L17 4H7L5.5 6h13zM9 10H7v2a5 5 0 1010 0v-2h-2v2a3 3 0 01-6 0v-2z"></path>
    </svg>
  );
};

ShoppingBagFill.propTypes = {
  color: PropTypes.string
};

export default ShoppingBagFill;
