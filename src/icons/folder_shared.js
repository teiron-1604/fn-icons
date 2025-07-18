import React from 'react';
import PropTypes from 'prop-types';

const FolderShared = props => {
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
      <path d="M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v7zm-4 4v-3.5l5 4.5-5 4.5V19h-3v-2h3z"></path>
    </svg>
  );
};

FolderShared.propTypes = {
  color: PropTypes.string
};

export default FolderShared;
