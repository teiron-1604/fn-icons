import React from 'react';
import PropTypes from 'prop-types';

const VolumeOffVibrateFill = props => {
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
      <g clipPath="url(#clip0_18_15556)" fillRule="evenodd" clipRule="evenodd">
        <path d="M10 5.157a.999.999 0 01-.88-1.69A1.686 1.686 0 0112 4.656v.686a1 1 0 11-2 0v-.186z"></path>
        <path d="M1.293 1.293a1 1 0 011.414 0l20 20a1 1 0 01-1.414 1.414l-20-20a1 1 0 010-1.414z"></path>
        <path d="M5.573 17.03A.4.4 0 005.42 17a1 1 0 01-1.003-.997c-.002-.552 2.911-7.895 3.291-8.296C7.42 7.905 10.65 18.298 11 18.298a1 1 0 011.001.999 1.705 1.705 0 01-2.912 1.207l-3.384-3.386a.401.401 0 00-.13-.088z"></path>
        <path d="M11 10a1 1 0 011 1v8.298a1 1 0 01-1 1c-.552 0-3.774-12.32-3.293-12.59C7.9 8.224 10.447 10 11 10z"></path>
        <path d="M5.573 17.03A.4.4 0 005.42 17H3a1 1 0 01-1-1c0-.552 5.191-8.096 5.707-8.293"></path>
        <path d="M6.293 6.293a1 1 0 011.414 1.414C7.296 8.075 4 15.447 4 16a1 1 0 01-1 1 2 2 0 01-2-2V9a2 2 0 012-2h2.419a.4.4 0 00.285-.118l.002-.002.587-.587z"></path>
        <path d="M18.657 4.93a1 1 0 011.414-.001 10 10 0 012.099 11.066 1 1 0 11-1.834-.798 8 8 0 00-1.679-8.854 1 1 0 010-1.414zM15.4 8.2a1 1 0 011.4.2 6 6 0 011.14 2.752 1 1 0 11-1.98.283A4.002 4.002 0 0015.2 9.6a1 1 0 01.2-1.4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15556">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

VolumeOffVibrateFill.propTypes = {
  color: PropTypes.string
};

export default VolumeOffVibrateFill;
