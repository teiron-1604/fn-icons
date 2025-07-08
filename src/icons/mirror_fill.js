import React from 'react';
import PropTypes from 'prop-types';

const MirrorFill = props => {
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
      <path d="M2 2v20l7-4V6L2 2z"></path>
      <path d="M15 6v12l7 4V2l-7 4z"></path>
      <path d="M13 22V2h-2v20h2z"></path>
    </svg>
  );
};

MirrorFill.propTypes = {
  color: PropTypes.string
};

export default MirrorFill;
