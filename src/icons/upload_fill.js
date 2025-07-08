import React from 'react';
import PropTypes from 'prop-types';

const UploadFill = props => {
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
      <path d="M19 20a1 1 0 110 2H5a1 1 0 010-2h14z"></path>
      <path d="M11.293 2.293a1 1 0 011.414 0l6 6A1 1 0 0118 10h-5v7a1 1 0 01-2 0v-7H6a1 1 0 01-.707-1.707l6-6z"></path>
    </svg>
  );
};

UploadFill.propTypes = {
  color: PropTypes.string
};

export default UploadFill;
