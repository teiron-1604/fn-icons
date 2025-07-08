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
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
      className={'animate-spin ' + className}
    >
      <path d="M11 22v-4a1 1 0 112 0v4a1 1 0 11-2 0zm-3.907-6.507a1 1 0 111.414 1.414l-2.9 2.9a1 1 0 11-1.414-1.414l2.9-2.9zm8.4 0a1 1 0 011.338-.07l.076.07 2.9 2.9.069.076a1 1 0 01-1.407 1.407l-.076-.07-2.9-2.899-.07-.076a1 1 0 01.07-1.338zM6 11a1 1 0 110 2H2a1 1 0 110-2h4zm16 0a1 1 0 110 2h-4a1 1 0 110-2h4zM4.193 4.192a1 1 0 011.414 0l2.9 2.9.07.077a1 1 0 01-1.408 1.406l-.076-.068-2.9-2.9a1.001 1.001 0 010-1.415zm14.2 0a1 1 0 011.414 1.415l-2.9 2.9a1 1 0 11-1.414-1.414l2.9-2.9zM11 6V2a1 1 0 112 0v4a1 1 0 11-2 0z"></path>
    </svg>
  );
};

Loader.propTypes = {
  color: PropTypes.string
};

export default Loader;
