import React from 'react';
import PropTypes from 'prop-types';

const Emphasis = props => {
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
      <path d="M12 19a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm11 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM17 3a1 1 0 110 2H8v4h8a1 1 0 110 2H8v4h9a1 1 0 110 2H6.828A.828.828 0 016 16.172V3.828C6 3.37 6.37 3 6.828 3H17z"></path>
    </svg>
  );
};

Emphasis.propTypes = {
  color: PropTypes.string
};

export default Emphasis;
