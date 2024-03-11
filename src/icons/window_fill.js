import React from 'react';
import PropTypes from 'prop-types';

const WindowFill = props => {
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
      <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm17 7H4v9h16v-9zm-5-4v2h4V6h-4z"></path>
    </svg>
  );
};

WindowFill.propTypes = {
  color: PropTypes.string
};

WindowFill.defaultProps = {
  color: 'currentColor'
};

export default WindowFill;
