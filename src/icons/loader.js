import React from 'react';
import PropTypes from 'prop-types';

const Loader = props => {
  const { color, className = '', ...otherProps } = props;
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
      <path d="M18.364 5.636L16.95 7.05A7 7 0 1019 12h2a9 9 0 11-2.636-6.364z"></path>
    </svg>
  );
};

Loader.propTypes = {
  color: PropTypes.string
};

Loader.defaultProps = {
  color: 'currentColor'
};

export default Loader;
