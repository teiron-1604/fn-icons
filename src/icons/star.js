import React from 'react';
import PropTypes from 'prop-types';

const Star = props => {
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
        d="M11.998 3.592l-1.887 3.824a3.123 3.123 0 01-2.35 1.707l-4.225.618 3.055 2.974a3.122 3.122 0 01.9 2.765l-.72 4.202 3.774-1.985a3.126 3.126 0 012.904 0l3.778 1.986-.722-4.204a3.126 3.126 0 01.899-2.763l3.054-2.974-4.225-.619a3.125 3.125 0 01-2.347-1.706l-1.888-3.825zM2.592 9.879h.004-.004zM11.19 1.23a1.53 1.53 0 012.178.621l2.31 4.68a1.123 1.123 0 00.844.613l5.164.756a1.533 1.533 0 011.236 1.041 1.53 1.53 0 01-.387 1.569L18.8 14.148a1.123 1.123 0 00-.323.993m0 0l.88 5.135.001.004a1.53 1.53 0 01-2.223 1.614l-.003-.001-4.613-2.426a1.123 1.123 0 00-1.043 0l-4.614 2.427H6.86A1.53 1.53 0 014.64 20.28v-.003l.88-5.135a1.122 1.122 0 00-.323-.994l-3.733-3.634-.002-.002A1.53 1.53 0 012.31 7.9l5.163-.755a1.125 1.125 0 00.845-.613l2.31-4.68a1.53 1.53 0 01.564-.62"
      ></path>
    </svg>
  );
};

Star.propTypes = {
  color: PropTypes.string
};

export default Star;
