import React from 'react';
import PropTypes from 'prop-types';

const Gamepad = props => {
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
      <path d="M17 4a6 6 0 016 6v4a6 6 0 01-6 6H7a6 6 0 01-6-6v-4a6 6 0 016-6h10zm0 2H7a4 4 0 00-3.995 3.8L3 10v4a4 4 0 003.8 3.995L7 18h10a4 4 0 003.995-3.8L21 14v-4a4 4 0 00-3.8-3.995L17 6zm-7 3v2h2v2H9.999L10 15H8l-.001-2H6v-2h2V9h2zm8 4v2h-2v-2h2zm-2-4v2h-2V9h2z"></path>
    </svg>
  );
};

Gamepad.propTypes = {
  color: PropTypes.string
};

export default Gamepad;
