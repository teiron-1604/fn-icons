import React from 'react';
import PropTypes from 'prop-types';

const FolderCheckFill = props => {
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
      <path d="M19 13c1.093 0 2.117.292 3 .803V6a1 1 0 00-1-1h-8.586l-2-2H3a1 1 0 00-1 1v16a1 1 0 001 1h10.341A6 6 0 0119 13zm-3.536 5.465L19 22l4.95-4.95-1.415-1.414L19 19.172l-2.121-2.122-1.415 1.415z"></path>
    </svg>
  );
};

FolderCheckFill.propTypes = {
  color: PropTypes.string
};

export default FolderCheckFill;
