import React from 'react';
import PropTypes from 'prop-types';

const BagFill = props => {
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
      <path d="M9 14v3h6v-3h7v7a1 1 0 01-1 1H3a1 1 0 01-1-1v-7h7zm2-2h2v3h-2v-3zM7 6V3a1 1 0 011-1h8a1 1 0 011 1v3h4a1 1 0 011 1v5h-7v-2H9v2H2V7a1 1 0 011-1h4zm2-2v2h6V4H9z"></path>
    </svg>
  );
};

BagFill.propTypes = {
  color: PropTypes.string
};

export default BagFill;
