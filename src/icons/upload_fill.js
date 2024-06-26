import React from 'react';
import PropTypes from 'prop-types';

const UploadFill = props => {
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
      <path d="M3 19h18v2H3v-2zm10-9v8h-2v-8H4l8-8 8 8h-7z"></path>
    </svg>
  );
};

UploadFill.propTypes = {
  color: PropTypes.string
};

UploadFill.defaultProps = {
  color: 'currentColor'
};

export default UploadFill;
