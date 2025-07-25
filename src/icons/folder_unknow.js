import React from 'react';
import PropTypes from 'prop-types';

const FolderUnknow = props => {
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
      <path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 11h2v2h-2v-2zm-2.433-5.187A3.501 3.501 0 1112 15h-1v-2h1a1.5 1.5 0 10-1.471-1.794l-1.962-.393z"></path>
    </svg>
  );
};

FolderUnknow.propTypes = {
  color: PropTypes.string
};

export default FolderUnknow;
