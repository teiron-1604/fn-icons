import React from 'react';
import PropTypes from 'prop-types';

const VolumeCloseFill = props => {
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
        d="M1.586 7.586A2 2 0 013 7h2.416a1 1 0 011 1c0 .552.718 4.275.166 4.275.552 0-.166 3.173-.166 3.725a1 1 0 01-1 1H3a2 2 0 01-2-2V9a2 2 0 01.586-1.414z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3.702a1 1 0 011 1v14.596a1 1 0 01-1 1c-.552 0-4.418-7.471-4.418-8.023L10 4.702a1 1 0 011-1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.963 3.03A1.705 1.705 0 0112 4.7a1 1 0 01-.999 1.002c-.35 0-4.24 6.845-4.419 6.573-.224.224.293-.122 0 0-.293.121.318 0 0 0-.552-.002-2.168-3.726-2.166-4.278A1 1 0 015.419 7a.4.4 0 00.285-.118l.002-.002L9.09 3.497c.238-.238.543-.4.873-.466z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.573 17.03A.4.4 0 005.42 17a1 1 0 01-1.003-.997c-.002-.552 1.614-3.727 2.166-3.728-.293-.122.318-.001 0 0-.224-.225.293.12 0 0 .178-.272 4.067 6.024 4.417 6.023a1 1 0 011.001.999 1.705 1.705 0 01-2.912 1.207l-3.384-3.386a.4.4 0 00-.13-.087z"
      ></path>
    </svg>
  );
};

VolumeCloseFill.propTypes = {
  color: PropTypes.string
};

export default VolumeCloseFill;
