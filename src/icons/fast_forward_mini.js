import React from 'react';
import PropTypes from 'prop-types';

const FastForwardMini = props => {
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
      <path d="M12.36 5.501a1 1 0 011.054.11l7.2 5.6a1 1 0 010 1.579l-7.2 5.6a1 1 0 01-1.614-.79v-4.8l-7.186 5.59A1 1 0 013 17.6V6.4a1 1 0 011.614-.79L11.8 11.2V6.4a1 1 0 01.56-.899zM5 15.555L9.57 12 5 8.444v7.111zm8.8 0L18.37 12 13.8 8.444v7.111z"></path>
    </svg>
  );
};

FastForwardMini.propTypes = {
  color: PropTypes.string
};

export default FastForwardMini;
