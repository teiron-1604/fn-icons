import React from 'react';
import PropTypes from 'prop-types';

const WifiOffFill = props => {
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
      <path d="M11.998 18c.715 0 1.37.25 1.886.666L11.998 21l-1.885-2.334A2.986 2.986 0 0111.998 18zM2.807 1.393L20.483 19.07l-1.415 1.414-3.681-3.68-.248.306A4.98 4.98 0 0011.998 16a4.98 4.98 0 00-3.14 1.11l-1.886-2.334a7.962 7.962 0 014.622-1.766l-1.772-1.772a9.963 9.963 0 00-4.106 1.982l-1.888-2.333A12.984 12.984 0 017.415 8.83L5.883 7.3a15 15 0 00-3.31 2.03L.689 6.998A18.018 18.018 0 013.64 5.055L1.39 2.808l1.416-1.415zM16.081 11.87l-3.868-3.867L11.998 8c3.096 0 5.938 1.08 8.17 2.887l-1.886 2.334a9.998 9.998 0 00-2.2-1.352zM11.998 3c4.286 0 8.22 1.497 11.31 3.997L21.424 9.33A14.937 14.937 0 0012 6c-.572 0-1.136.032-1.69.094L7.722 3.51A18.054 18.054 0 0111.997 3z"></path>
    </svg>
  );
};

WifiOffFill.propTypes = {
  color: PropTypes.string
};

export default WifiOffFill;
