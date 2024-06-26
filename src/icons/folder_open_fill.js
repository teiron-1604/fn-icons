import React from 'react';
import PropTypes from 'prop-types';

const FolderOpenFill = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M3 21a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H20a1 1 0 011 1v3H4v9.996L6 11h16.5l-2.31 9.243a1 1 0 01-.97.757H3z"></path>
    </svg>
  );
};

FolderOpenFill.propTypes = {
  color: PropTypes.string
};

FolderOpenFill.defaultProps = {
  color: 'currentColor'
};

export default FolderOpenFill;
