import React from 'react';
import PropTypes from 'prop-types';

const PlayMini = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M7.853 5.122c.32-.175.712-.16 1.02.037l9.333 6a1 1 0 010 1.682l-9.333 6A1.001 1.001 0 017.332 18V6l.009-.136a1 1 0 01.512-.742zm1.479 11.046L15.816 12 9.332 7.831v8.337z"></path>
    </svg>
  );
};

PlayMini.propTypes = {
  color: PropTypes.string
};

export default PlayMini;
