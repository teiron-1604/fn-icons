import React from 'react';
import PropTypes from 'prop-types';

const UploadCloudFill = props => {
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
      <path d="M7 20.981a6.5 6.5 0 01-2.936-12 8.001 8.001 0 0115.872 0 6.5 6.5 0 01-2.936 12v.02H7v-.02zm6-7.98h3l-4-5-4 5h3v4h2v-4z"></path>
    </svg>
  );
};

UploadCloudFill.propTypes = {
  color: PropTypes.string
};

UploadCloudFill.defaultProps = {
  color: 'currentColor'
};

export default UploadCloudFill;
