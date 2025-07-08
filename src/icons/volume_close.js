import React from 'react';
import PropTypes from 'prop-types';

const VolumeClose = props => {
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
        d="M15.293 8.293a1 1 0 011.414 0L19 10.586l2.293-2.293a1 1 0 111.414 1.414L20.414 12l2.293 2.293a1 1 0 01-1.414 1.414L19 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L17.586 12l-2.293-2.293a1 1 0 010-1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.586 7.586A2 2 0 013 7h2.416a1 1 0 110 2H3v6h2.416a1 1 0 110 2H3a2 2 0 01-2-2V9a2 2 0 01.586-1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3.702a1 1 0 011 1v14.596a1 1 0 11-2 0V4.702a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.963 3.03A1.705 1.705 0 0112 4.7a1 1 0 01-1.836.551L7.122 8.292l-.001.001A2.4 2.4 0 015.413 9a1 1 0 11.006-2 .4.4 0 00.285-.118l.002-.002L9.09 3.497c.238-.238.543-.4.873-.466z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.573 17.03A.4.4 0 005.42 17a1 1 0 01-.006-2 2.401 2.401 0 011.708.707l.001.001 3.041 3.042a.999.999 0 011.837.547 1.705 1.705 0 01-2.912 1.207l-3.384-3.386a.4.4 0 00-.13-.087z"
      ></path>
    </svg>
  );
};

VolumeClose.propTypes = {
  color: PropTypes.string
};

export default VolumeClose;
