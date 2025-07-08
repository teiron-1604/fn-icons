import React from 'react';
import PropTypes from 'prop-types';

const FolderInfoFill = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM11 9v2h2V9h-2zm0 3v5h2v-5h-2z"></path>
    </svg>
  );
};

FolderInfoFill.propTypes = {
  color: PropTypes.string
};

export default FolderInfoFill;
