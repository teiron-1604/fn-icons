import React from 'react';
import PropTypes from 'prop-types';

const More2 = props => {
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
      <path d="M12 9a3 3 0 110 6 3 3 0 010-6zm-8 1a2 2 0 110 4 2 2 0 010-4zm16 0a2 2 0 110 4 2 2 0 010-4z"></path>
    </svg>
  );
};

More2.propTypes = {
  color: PropTypes.string
};

export default More2;
