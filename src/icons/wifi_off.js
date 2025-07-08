import React from 'react';
import PropTypes from 'prop-types';

const WifiOff = props => {
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
      <path d="M11.998 18c.715 0 1.37.25 1.886.666L11.998 21l-1.885-2.334A2.986 2.986 0 0111.998 18zM2.807 1.393L20.483 19.07l-1.415 1.414-5.18-5.18A5.992 5.992 0 0012 15c-1.429 0-2.74.499-3.77 1.332l-1.256-1.556a7.962 7.962 0 014.622-1.766l-2.597-2.596a10.969 10.969 0 00-3.911 2.029l-1.258-1.556A12.984 12.984 0 017.415 8.83L5.13 6.545a16.009 16.009 0 00-3.184 2.007L.688 6.997A18.018 18.018 0 013.64 5.055L1.39 2.808l1.416-1.415zm11.691 8.892l-2.284-2.283L11.998 8c3.096 0 5.938 1.08 8.17 2.887l-1.258 1.556a10.96 10.96 0 00-4.412-2.158zM11.998 3c4.286 0 8.22 1.497 11.31 3.997l-1.256 1.555A15.933 15.933 0 0011.998 5c-.879 0-1.74.07-2.58.207L7.723 3.51A18.077 18.077 0 0112 3z"></path>
    </svg>
  );
};

WifiOff.propTypes = {
  color: PropTypes.string
};

export default WifiOff;
