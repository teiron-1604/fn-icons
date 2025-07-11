import React from 'react';
import PropTypes from 'prop-types';

const FolderUnknowFill = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM11 16v2h2v-2h-2zm-2.433-5.187l1.962.393A1.5 1.5 0 1112 13h-1v2h1a3.5 3.5 0 10-3.433-4.187z"></path>
    </svg>
  );
};

FolderUnknowFill.propTypes = {
  color: PropTypes.string
};

export default FolderUnknowFill;
