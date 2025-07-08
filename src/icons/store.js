import React from 'react';
import PropTypes from 'prop-types';

const Store = props => {
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
      <g clipPath="url(#clip0_18_12663)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.83 3a1 1 0 00-.71.295l-.003.002L4.414 6h15.172l-2.703-2.703-.002-.002A1 1 0 0016.17 3H7.829zM21 8H3v2a1 1 0 00.974 1 1.7 1.7 0 00.972-.395l.058-.046a1.7 1.7 0 012.05.046 1.7 1.7 0 00.946.393 1.7 1.7 0 00.946-.393l.058-.046a1.7 1.7 0 012.05.046 1.7 1.7 0 00.946.393 1.7 1.7 0 00.946-.393l.058-.046a1.7 1.7 0 012.05.046 1.7 1.7 0 00.946.393 1.7 1.7 0 00.946-.393l.058-.046a1.7 1.7 0 012.05.046 1.7 1.7 0 00.972.395A1 1 0 0021 10V8zm-2 4.821a3.701 3.701 0 01-1-.505 3.7 3.7 0 01-1.945.682 1.01 1.01 0 01-.11 0A3.7 3.7 0 0114 12.317a3.7 3.7 0 01-1.945.681 1.01 1.01 0 01-.11 0A3.7 3.7 0 0110 12.317a3.7 3.7 0 01-1.945.681 1.008 1.008 0 01-.11 0A3.7 3.7 0 016 12.317a3.7 3.7 0 01-1 .504V20a1 1 0 001 1h2v-3a3 3 0 013-3h2a3 3 0 013 3v3h2a1 1 0 001-1v-7.179zM14 21v-3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3h4zm-5 2h9a3 3 0 003-3v-7.172A2.999 2.999 0 0023 10V7a1 1 0 00-.293-.707L18.3 1.885l-.001-.001A3 3 0 0016.17 1H7.83M9 23H6a3 3 0 01-3-3v-7.172A2.999 2.999 0 011 10V7a1 1 0 01.293-.707L5.7 1.885l.001-.001A3 3 0 017.83 1"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12663">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Store.propTypes = {
  color: PropTypes.string
};

export default Store;
