import React from 'react';
import PropTypes from 'prop-types';

const PlayMiniFill = props => {
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
      <path d="M7.853 5.122c.32-.175.712-.16 1.02.037l9.333 6a1 1 0 010 1.682l-9.333 6A1.001 1.001 0 017.332 18V6l.009-.136a1 1 0 01.512-.742z"></path>
    </svg>
  );
};

PlayMiniFill.propTypes = {
  color: PropTypes.string
};

export default PlayMiniFill;
