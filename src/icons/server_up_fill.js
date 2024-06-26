import React from 'react';
import PropTypes from 'prop-types';

const ServerUpFill = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M20 2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h16zm-1 14H5v4h14v-4zm-2 1v2h-2v-2h2zM12 2L8 6h3v5h2V6h3l-4-4z"></path>
    </svg>
  );
};

ServerUpFill.propTypes = {
  color: PropTypes.string
};

ServerUpFill.defaultProps = {
  color: 'currentColor'
};

export default ServerUpFill;
