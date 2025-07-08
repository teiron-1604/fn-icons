import React from 'react';
import PropTypes from 'prop-types';

const VolumeOffVibrate = props => {
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
      <g clipPath="url(#clip0_18_15550)" fillRule="evenodd" clipRule="evenodd">
        <path d="M10 5.157a.999.999 0 01-.88-1.69A1.686 1.686 0 0112 4.656v.686a1 1 0 11-2 0v-.186z"></path>
        <path d="M1.293 1.293a1 1 0 011.414 0l20 20a1 1 0 01-1.414 1.414l-20-20a1 1 0 010-1.414z"></path>
        <path d="M5.573 17.03A.4.4 0 005.42 17a1 1 0 01-.006-2 2.401 2.401 0 011.708.707l.001.001 3.041 3.042a1 1 0 011.837.547 1.705 1.705 0 01-2.912 1.207l-3.384-3.386a.401.401 0 00-.13-.088z"></path>
        <path d="M11 10a1 1 0 011 1v8.298a1 1 0 11-2 0V11a1 1 0 011-1z"></path>
        <path d="M5.573 17.03A.4.4 0 005.42 17H3a1 1 0 110-2h2.415"></path>
        <path d="M6.293 6.293a1 1 0 011.414 1.414l-.585.585-.001.001A2.4 2.4 0 015.415 9h-.002.003H3v6a1 1 0 110 2 2 2 0 01-2-2V9a2 2 0 012-2h2.419a.4.4 0 00.285-.118l.002-.002.587-.587z"></path>
        <path d="M18.657 4.93a1 1 0 011.414-.001 10 10 0 012.099 11.066 1 1 0 11-1.834-.798 8 8 0 00-1.679-8.854 1 1 0 010-1.414zM15.4 8.2a1 1 0 011.4.2 6 6 0 011.14 2.752 1 1 0 11-1.98.283A4.002 4.002 0 0015.2 9.6a1 1 0 01.2-1.4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15550">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

VolumeOffVibrate.propTypes = {
  color: PropTypes.string
};

export default VolumeOffVibrate;
