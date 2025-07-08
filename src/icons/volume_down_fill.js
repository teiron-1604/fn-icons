import React from 'react';
import PropTypes from 'prop-types';

const VolumeDownFill = props => {
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
        d="M4.586 7.588A2 2 0 016 7.002h2.416a1 1 0 011 1c0 .552.57 4.274.57 4.274s-.57 3.174-.57 3.726a1 1 0 01-1 1H6a2 2 0 01-2-2v-6a2 2 0 01.586-1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 3.704a1 1 0 011 1V19.3a1 1 0 01-1 1c-.552 0-4.013-8.024-4.013-8.024L13 4.705a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.963 3.033A1.705 1.705 0 0115 4.703a1 1 0 01-.999 1.001c-.35 0-4.014 6.573-4.014 6.573S7.414 8.55 7.416 7.999a1 1 0 011.003-.997.4.4 0 00.285-.118l.002-.002 3.384-3.383c.238-.238.543-.4.873-.466z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.573 17.032a.4.4 0 00-.154-.03 1 1 0 01-1.003-.997c-.002-.552 2.57-3.728 2.57-3.728S13.65 18.3 14 18.3a1 1 0 011.001.999 1.705 1.705 0 01-2.912 1.207L8.704 17.12a.4.4 0 00-.13-.088z"
      ></path>
    </svg>
  );
};

VolumeDownFill.propTypes = {
  color: PropTypes.string
};

export default VolumeDownFill;
