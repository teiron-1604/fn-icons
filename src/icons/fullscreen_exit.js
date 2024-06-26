import React from 'react';
import PropTypes from 'prop-types';

const FullscreenExit = props => {
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
      <path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path>
    </svg>
  );
};

FullscreenExit.propTypes = {
  color: PropTypes.string
};

FullscreenExit.defaultProps = {
  color: 'currentColor'
};

export default FullscreenExit;
