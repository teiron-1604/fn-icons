import React from 'react';
import PropTypes from 'prop-types';

const FolderFill = props => {
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
      <path d="M7.93 3a3.001 3.001 0 012.502 1.345l.813 1.205a1 1 0 00.845.45H20a3 3 0 013 3v10a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h3.93z"></path>
    </svg>
  );
};

FolderFill.propTypes = {
  color: PropTypes.string
};

export default FolderFill;
