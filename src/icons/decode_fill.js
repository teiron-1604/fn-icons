import React from 'react';
import PropTypes from 'prop-types';

const DecodeFill = props => {
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
      <path d="M18 2a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h12zM6 15v2h2v-2H6zm6-2v2h2v-2h-2zm-4-2v2h2v-2H8zm2-4v2h2v2h2V9h2v2h-2v2h4V7h-8z"></path>
    </svg>
  );
};

DecodeFill.propTypes = {
  color: PropTypes.string
};

export default DecodeFill;
