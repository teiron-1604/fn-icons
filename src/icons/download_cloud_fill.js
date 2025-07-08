import React from 'react';
import PropTypes from 'prop-types';

const DownloadCloudFill = props => {
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
      <path d="M12.406 2.01c4.025.188 7.32 3.15 8.028 7.017a7.148 7.148 0 012.986 5.816l-.01.368a7.158 7.158 0 01-6.78 6.78l-.367.009c-.105 0-.206-.005-.302-.01-.049.005-.107.01-.171.01H8.21c-.066 0-.127-.005-.177-.01l-.297.01a7.158 7.158 0 01-7.148-6.79l-.01-.367a7.15 7.15 0 012.985-5.816C4.293 5.03 7.79 2 11.998 2l.407.01zM12 9a1 1 0 00-1 1v4.086l-1.293-1.293-.076-.068a1 1 0 00-1.406 1.406l.068.076 3 3 .076.068a1 1 0 001.338-.068l3-3a1 1 0 10-1.414-1.414l-1.293 1.293V10a1 1 0 00-1-1z"></path>
    </svg>
  );
};

DownloadCloudFill.propTypes = {
  color: PropTypes.string
};

export default DownloadCloudFill;
