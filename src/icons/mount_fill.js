import React from 'react';
import PropTypes from 'prop-types';

const MountFill = props => {
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
      <path d="M19.2 3C20.72 3 22 4.205 22 5.75v3.5c0 1.545-1.28 2.75-2.8 2.75H13v2.137a3.708 3.708 0 012.563 2.563H21.5a1 1 0 010 2h-5.937a3.703 3.703 0 01-7.126 0H2.5a1 1 0 010-2h5.937A3.708 3.708 0 0111 14.137V12H4.8C3.28 12 2 10.795 2 9.25v-3.5C2 4.205 3.28 3 4.8 3h14.4zM12 16a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM6.6 6.5a1 1 0 000 2h.01a1.015 1.015 0 00.388-.078.998.998 0 00.44-.362.998.998 0 00.092-.95.998.998 0 00-.92-.61H6.6zm3.6 0a1 1 0 100 2h.009a1.014 1.014 0 00.39-.078 1.001 1.001 0 00.59-1.123 1.004 1.004 0 00-.98-.799H10.2z"></path>
    </svg>
  );
};

MountFill.propTypes = {
  color: PropTypes.string
};

export default MountFill;
