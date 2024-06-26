import React from 'react';
import PropTypes from 'prop-types';

const WifiOffFill = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M12 18c.714 0 1.37.25 1.886.666L12 21l-1.886-2.334A2.986 2.986 0 0112 18zM2.808 1.393l17.677 17.678-1.414 1.414-3.682-3.68-.247.306A4.98 4.98 0 0012 16.001a4.98 4.98 0 00-3.141 1.11l-1.885-2.335a7.962 7.962 0 014.622-1.766l-1.773-1.772a9.963 9.963 0 00-4.106 1.982L3.83 10.887A12.984 12.984 0 017.416 8.83L5.885 7.3a15 15 0 00-3.31 2.031L.689 6.997a18.018 18.018 0 012.952-1.942L1.393 2.808l1.415-1.415zM16.084 11.87l-3.868-3.867L12 8c3.095 0 5.937 1.081 8.17 2.887l-1.886 2.334a10.002 10.002 0 00-2.2-1.352v.001zM12 3c4.285 0 8.22 1.497 11.31 3.997L21.426 9.33A14.937 14.937 0 0012 6c-.572 0-1.136.032-1.69.094L7.723 3.511A18.055 18.055 0 0112 3.001z"></path>
    </svg>
  );
};

WifiOffFill.propTypes = {
  color: PropTypes.string
};

WifiOffFill.defaultProps = {
  color: 'currentColor'
};

export default WifiOffFill;
