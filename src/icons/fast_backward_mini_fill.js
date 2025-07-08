import React from 'react';
import PropTypes from 'prop-types';

const FastBackwardMiniFill = props => {
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
      <path d="M11.64 5.501a1 1 0 00-1.054.11l-7.2 5.6a1 1 0 000 1.579l7.2 5.6a1 1 0 001.614-.79v-4.8l7.186 5.59A1 1 0 0021 17.6V6.4a1 1 0 00-1.614-.79L12.2 11.2V6.4a1 1 0 00-.56-.899z"></path>
    </svg>
  );
};

FastBackwardMiniFill.propTypes = {
  color: PropTypes.string
};

export default FastBackwardMiniFill;
