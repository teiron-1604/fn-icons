import React from 'react';
import PropTypes from 'prop-types';

const Loader = props => {
  const { color = 'currentColor', className = '', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
      className={'animate-spin ' + className}
    >
      <path d="M2 12C2 6.477 6.477 2 12 2c2.221 0 4.276.726 5.936 1.952l-.594.804-.594.805A8 8 0 1020 12a1 1 0 112-.001c0 5.523-4.477 10-10 10S2 17.523 2 12zm15.936-8.048a1 1 0 01-1.188 1.609l1.188-1.609z"></path>
    </svg>
  );
};

Loader.propTypes = {
  color: PropTypes.string
};

export default Loader;
