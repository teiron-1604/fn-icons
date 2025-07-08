import React from 'react';
import PropTypes from 'prop-types';

const FolderForbidFill = props => {
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
      <path d="M22 11.255A7 7 0 0012.255 21H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v5.255zM18 22a5 5 0 110-10 5 5 0 010 10zm-1.293-2.292a3 3 0 004.001-4.001l-4.001 4v.001zm-1.415-1.415l4.001-4a3 3 0 00-4.001 4.001v-.001z"></path>
    </svg>
  );
};

FolderForbidFill.propTypes = {
  color: PropTypes.string
};

export default FolderForbidFill;
