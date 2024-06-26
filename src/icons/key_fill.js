import React from 'react';
import PropTypes from 'prop-types';

const KeyFill = props => {
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
      <path d="M17 14h-4.34a6 6 0 110-4H23v4h-2v4h-4v-4zM7 14a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
};

KeyFill.propTypes = {
  color: PropTypes.string
};

KeyFill.defaultProps = {
  color: 'currentColor'
};

export default KeyFill;
