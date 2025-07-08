import React from 'react';
import PropTypes from 'prop-types';

const FolderCheck = props => {
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
      <path d="M3 3a1 1 0 00-1 1v16a1 1 0 001 1h10v-2H4V5h5.586l2 2H20v6h2V6a1 1 0 00-1-1h-8.586l-2-2H3zm12.464 15.465L19 22l4.95-4.95-1.415-1.414L19 19.172l-2.121-2.122-1.415 1.415z"></path>
    </svg>
  );
};

FolderCheck.propTypes = {
  color: PropTypes.string
};

export default FolderCheck;
