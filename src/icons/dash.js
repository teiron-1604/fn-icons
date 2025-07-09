import React from 'react';
import PropTypes from 'prop-types';

const Dash = props => {
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
      <path d="M21 11a1 1 0 110 2H3a1 1 0 110-2h18z"></path>
    </svg>
  );
};

Dash.propTypes = {
  color: PropTypes.string
};

export default Dash;
