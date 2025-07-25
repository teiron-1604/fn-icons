import React from 'react';
import PropTypes from 'prop-types';

const WifiOn = props => {
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
      <path d="M.691 6.997A17.925 17.925 0 0112.001 3c4.285 0 8.22 1.497 11.31 3.997l-1.256 1.556A15.933 15.933 0 0012.001 5C8.192 5 4.695 6.33 1.947 8.553L.691 6.997zm3.141 3.89A12.946 12.946 0 0112.002 8a12.95 12.95 0 018.168 2.886l-1.257 1.556A10.955 10.955 0 0012.001 10c-2.618 0-5.023.915-6.912 2.442l-1.257-1.556v.001zm3.142 3.89A7.967 7.967 0 0112.001 13c1.904 0 3.653.665 5.027 1.776l-1.257 1.556A5.975 5.975 0 0012.001 15c-1.428 0-2.74.499-3.77 1.332l-1.257-1.556v.001zm3.142 3.89A2.987 2.987 0 0112.001 18c.714 0 1.37.25 1.885.666L12.001 21l-1.885-2.334v.001z"></path>
    </svg>
  );
};

WifiOn.propTypes = {
  color: PropTypes.string
};

export default WifiOn;
