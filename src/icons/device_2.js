import React from 'react';
import PropTypes from 'prop-types';

const Device2 = props => {
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
      <path d="M16 13v8h5v-8h-5zm-1-2h7a1 1 0 011 1v10a1 1 0 01-1 1h-7a1 1 0 01-1-1V12a1 1 0 011-1z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 15H3V4h16v7h2V3.007A.998.998 0 0020.008 2H1.992C1.455 2 1 2.451 1 3.007v12.986A.998.998 0 001.992 17H10v2H6v2h10v-2h-4v-2h2v-2z"
      ></path>
    </svg>
  );
};

Device2.propTypes = {
  color: PropTypes.string
};

export default Device2;
