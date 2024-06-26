import React from 'react';
import PropTypes from 'prop-types';

const WifiOff = props => {
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
      <path d="M12 18c.714 0 1.37.25 1.886.666L12 21l-1.886-2.334A2.986 2.986 0 0112 18zM2.808 1.393l17.677 17.678-1.414 1.414-5.18-5.18A5.992 5.992 0 0012 15c-1.428 0-2.74.5-3.77 1.332l-1.256-1.556a7.962 7.962 0 014.622-1.766L9 10.414a10.969 10.969 0 00-3.912 2.03L3.83 10.886A12.984 12.984 0 017.416 8.83L5.132 6.545a16.009 16.009 0 00-3.185 2.007L.689 6.997a18.018 18.018 0 012.952-1.942L1.393 2.808l1.415-1.415zM14.5 10.285l-2.284-2.283L12 8c3.095 0 5.937 1.081 8.17 2.887l-1.258 1.556a10.96 10.96 0 00-4.412-2.158zM12 3c4.285 0 8.22 1.497 11.31 3.997l-1.257 1.555A15.933 15.933 0 0012 5c-.878 0-1.74.07-2.58.207L7.725 3.51A18.077 18.077 0 0112 3z"></path>
    </svg>
  );
};

WifiOff.propTypes = {
  color: PropTypes.string
};

WifiOff.defaultProps = {
  color: 'currentColor'
};

export default WifiOff;
