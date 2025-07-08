import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftSFill = props => {
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
      <path d="M15.383 18.924a1 1 0 01-1.09-.217l-6-6a1 1 0 010-1.414l6-6A1 1 0 0116 6v12a1 1 0 01-.617.924z"></path>
    </svg>
  );
};

ArrowLeftSFill.propTypes = {
  color: PropTypes.string
};

export default ArrowLeftSFill;
