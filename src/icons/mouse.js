import React from 'react';
import PropTypes from 'prop-types';

const Mouse = props => {
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
      <path d="M11.141 4c-1.582 0-2.387.169-3.128.565a3.453 3.453 0 00-1.448 1.448C6.169 6.753 6 7.559 6 9.14v5.718c0 1.582.169 2.387.565 3.128.337.63.818 1.111 1.448 1.448.74.396 1.546.565 3.128.565h1.718c1.582 0 2.387-.169 3.128-.565a3.453 3.453 0 001.448-1.448c.396-.74.565-1.546.565-3.128V9.14c0-1.582-.169-2.387-.565-3.128a3.453 3.453 0 00-1.448-1.448C15.247 4.169 14.441 4 12.86 4h-1.72.001zm0-2h1.718c2.014 0 3.094.278 4.072.801a5.452 5.452 0 012.268 2.268c.523.978.801 2.058.801 4.072v5.718c0 2.014-.278 3.094-.801 4.072a5.452 5.452 0 01-2.268 2.268c-.978.523-2.058.801-4.072.801H11.14c-2.014 0-3.094-.278-4.072-.801A5.452 5.452 0 014.8 18.931c-.522-.978-.8-2.058-.8-4.072V9.14c0-2.014.278-3.094.801-4.072A5.452 5.452 0 017.07 2.801C8.047 2.278 9.127 2 11.141 2zM11 6h2v5h-2V6z"></path>
    </svg>
  );
};

Mouse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Mouse.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Mouse;
