import React from 'react';
import PropTypes from 'prop-types';

const Device = props => {
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
      <path d="M19 8h2a1 1 0 011 1v12a1 1 0 01-1 1h-8a1 1 0 01-1-1v-1H4a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v5zm-2 0V4H5v14h7V9a1 1 0 011-1h4zm-3 2v10h6V10h-6z"></path>
    </svg>
  );
};

Device.propTypes = {
  color: PropTypes.string
};

export default Device;
