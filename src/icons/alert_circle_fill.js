import React from 'react';
import PropTypes from 'prop-types';

const AlertCircleFill = props => {
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
      <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 14a1 1 0 100 2h.01l.102-.005a1 1 0 000-1.99L12.01 15H12zm0-8a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"></path>
    </svg>
  );
};

AlertCircleFill.propTypes = {
  color: PropTypes.string
};

export default AlertCircleFill;
