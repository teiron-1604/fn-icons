import React from 'react';
import PropTypes from 'prop-types';

const WifiOnFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M.69 6.997A17.925 17.925 0 0112 3c4.285 0 8.22 1.497 11.31 3.997L21.425 9.33A14.937 14.937 0 0012 6C8.43 6 5.15 7.248 2.575 9.33L.69 6.997zm3.14 3.89A12.946 12.946 0 0112 8a12.95 12.95 0 018.169 2.886l-1.885 2.334A9.958 9.958 0 0012 11c-2.38 0-4.566.832-6.284 2.22L3.83 10.886v.001zm3.143 3.89A7.967 7.967 0 0112 13c1.904 0 3.653.665 5.027 1.776l-1.885 2.334A4.98 4.98 0 0012 16a4.98 4.98 0 00-3.142 1.11l-1.885-2.334v.001zm3.142 3.89A2.987 2.987 0 0112 18c.714 0 1.37.25 1.885.666L12 21l-1.885-2.334v.001z"></path>
    </svg>
  );
};

WifiOnFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WifiOnFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WifiOnFill;
