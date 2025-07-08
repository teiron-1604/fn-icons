import React from 'react';
import PropTypes from 'prop-types';

const Mirror = props => {
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
      <path d="M9 6v12l-7 4V2l7 4zm4 16h-2V2h2v20zm9 0l-7-4V6l7-4v20zM4 18.554l3-1.715V7.16L4 5.446v13.108zM17 7.16v9.678l3 1.715V5.446l-3 1.715z"></path>
    </svg>
  );
};

Mirror.propTypes = {
  color: PropTypes.string
};

export default Mirror;
