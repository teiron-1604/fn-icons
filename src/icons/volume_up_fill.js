import React from 'react';
import PropTypes from 'prop-types';

const VolumeUpFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.657 4.929a1 1 0 011.414 0 10 10 0 010 14.142 1 1 0 01-1.414-1.414 8 8 0 000-11.314 1 1 0 010-1.414zM15.4 8.2a1 1 0 011.4.2 6 6 0 010 7.2 1 1 0 01-1.6-1.2 4 4 0 000-4.8 1 1 0 01.2-1.4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.586 7.586A2 2 0 013 7h2.416a1 1 0 011 1c0 .552.57 4.275.57 4.275s-.57 3.173-.57 3.725a1 1 0 01-1 1H3a2 2 0 01-2-2V9a2 2 0 01.586-1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3.702a1 1 0 011 1v14.596a1 1 0 01-1 1c-.552 0-4.013-8.023-4.013-8.023L10 4.702a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.963 3.03A1.705 1.705 0 0112 4.7a1 1 0 01-.999 1.002c-.35 0-4.014 6.573-4.014 6.573S4.414 8.549 4.416 7.997A1 1 0 015.419 7a.4.4 0 00.285-.118l.002-.002L9.09 3.497c.238-.238.543-.4.873-.466z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.573 17.03A.4.4 0 005.42 17a1 1 0 01-1.003-.997c-.002-.552 2.57-3.728 2.57-3.728S10.65 18.299 11 18.298a1 1 0 011.001.999 1.705 1.705 0 01-2.912 1.207l-3.384-3.386a.4.4 0 00-.13-.087z"
      ></path>
    </svg>
  );
};

VolumeUpFill.propTypes = {
  color: PropTypes.string
};

export default VolumeUpFill;
