import React from 'react';
import PropTypes from 'prop-types';

const FolderWarningFill = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM11 9v5h2V9h-2zm0 6v2h2v-2h-2z"></path>
    </svg>
  );
};

FolderWarningFill.propTypes = {
  color: PropTypes.string
};

export default FolderWarningFill;
