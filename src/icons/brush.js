import React from 'react';
import PropTypes from 'prop-types';

const Brush = props => {
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
      <path d="M8 20v-5h2v5h9v-7H5v7h3zm-4-9h16V8h-6V4h-4v4H4v3zM3 21v-8H2V7a1 1 0 011-1h5V3a1 1 0 011-1h6a1 1 0 011 1v3h5a1 1 0 011 1v6h-1v8a1 1 0 01-1 1H4a1 1 0 01-1-1z"></path>
    </svg>
  );
};

Brush.propTypes = {
  color: PropTypes.string
};

Brush.defaultProps = {
  color: 'currentColor'
};

export default Brush;
