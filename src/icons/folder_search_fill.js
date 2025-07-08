import React from 'react';
import PropTypes from 'prop-types';

const FolderSearchFill = props => {
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
      <path d="M21 5h-8.586l-2-2H3a1 1 0 00-1 1v16a1 1 0 001 1h9.682a6 6 0 119.235-6H22V6a1 1 0 00-1-1z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.95 19.535l-1.504-1.503a4 4 0 10-1.414 1.414l1.503 1.504 1.415-1.415zM18 16a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
    </svg>
  );
};

FolderSearchFill.propTypes = {
  color: PropTypes.string
};

export default FolderSearchFill;
