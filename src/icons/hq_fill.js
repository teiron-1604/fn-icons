import React from 'react';
import PropTypes from 'prop-types';

const HqFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm4.5 8.25V9H6v6h1.5v-2.25h2V15H11V9H9.5v2.25h-2zM16.25 15H17a1 1 0 001-1v-4a1 1 0 00-1-1h-3a1 1 0 00-1 1v4a1 1 0 001 1h.75v1.5h1.5V15zm-1.75-4.5h2v3h-2v-3z"></path>
    </svg>
  );
};

HqFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HqFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HqFill;
