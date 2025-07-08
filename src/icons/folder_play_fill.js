import React from 'react';
import PropTypes from 'prop-types';

const FolderPlayFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 5h-8.586l-2-2H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zM10.182 9.142l5.285 2.873a.8.8 0 01.045 1.38l-5.285 3.332A.8.8 0 019 16.05V9.845a.8.8 0 011.182-.703z"
      ></path>
    </svg>
  );
};

FolderPlayFill.propTypes = {
  color: PropTypes.string
};

export default FolderPlayFill;
