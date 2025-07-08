import React from 'react';
import PropTypes from 'prop-types';

const Bag = props => {
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
      <path d="M7 6V3a1 1 0 011-1h8a1 1 0 011 1v3h4a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h4zm2 8H4v6h16v-6h-5v3H9v-3zm11-6H4v4h5v-2h6v2h5V8zm-9 4v3h2v-3h-2zM9 4v2h6V4H9z"></path>
    </svg>
  );
};

Bag.propTypes = {
  color: PropTypes.string
};

export default Bag;
