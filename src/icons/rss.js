import React from 'react';
import PropTypes from 'prop-types';

const Rss = props => {
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
      <path d="M3 17a4 4 0 014 4H3v-4zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 00-9-9v-2zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16V3z"></path>
    </svg>
  );
};

Rss.propTypes = {
  color: PropTypes.string
};

export default Rss;
