import React from 'react';
import PropTypes from 'prop-types';

const FolderWarning = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 10h2v2h-2v-2zm0-6h2v5h-2V9z"></path>
    </svg>
  );
};

FolderWarning.propTypes = {
  color: PropTypes.string
};

export default FolderWarning;
