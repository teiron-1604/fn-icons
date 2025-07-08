import React from 'react';
import PropTypes from 'prop-types';

const VolumeDown = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4 8.202a1 1 0 011.4.2 6 6 0 010 7.2 1 1 0 01-1.6-1.2 4 4 0 000-4.8 1 1 0 01.2-1.4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.586 7.588A2 2 0 016 7.002h2.416a1 1 0 010 2H6v6h2.416a1 1 0 110 2H6a2 2 0 01-2-2v-6a2 2 0 01.586-1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 3.704a1 1 0 011 1V19.3a1 1 0 11-2 0V4.704a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.963 3.033A1.705 1.705 0 0115 4.703a1 1 0 01-1.836.55l-3.042 3.041-.001.001a2.4 2.4 0 01-1.708.707 1 1 0 01.006-2 .4.4 0 00.285-.118l.002-.002 3.384-3.383c.238-.238.543-.4.873-.466z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.573 17.032a.4.4 0 00-.154-.03 1 1 0 01-.006-2 2.401 2.401 0 011.708.707l.001.001 3.041 3.042a1 1 0 011.837.547 1.705 1.705 0 01-2.912 1.207L8.704 17.12a.4.4 0 00-.13-.088z"
      ></path>
    </svg>
  );
};

VolumeDown.propTypes = {
  color: PropTypes.string
};

export default VolumeDown;
