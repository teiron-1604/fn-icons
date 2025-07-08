import React from 'react';
import PropTypes from 'prop-types';

const FolderSearch = props => {
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
      <path d="M2 4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v5h-2V7h-8.414l-2-2H4v14h6v2H3a1 1 0 01-1-1V4z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.95 19.535l-1.504-1.503a4 4 0 10-1.414 1.414l1.503 1.504 1.415-1.415zM18 16a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
    </svg>
  );
};

FolderSearch.propTypes = {
  color: PropTypes.string
};

export default FolderSearch;
