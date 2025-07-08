import React from 'react';
import PropTypes from 'prop-types';

const UploadCloudFill = props => {
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
        d="M12.406 2.01c4.025.188 7.32 3.15 8.028 7.017a7.148 7.148 0 012.986 5.816l-.01.368a7.158 7.158 0 01-6.78 6.78l-.367.009c-.105 0-.206-.005-.302-.01-.049.005-.107.01-.171.01H8.21c-.066 0-.127-.005-.177-.01l-.297.01a7.158 7.158 0 01-7.148-6.79l-.01-.367a7.15 7.15 0 012.985-5.816C4.293 5.03 7.79 2 11.998 2l.407.01zm.3 7.283a1 1 0 00-1.338-.068l-.076.068-3 3-.068.076a1 1 0 001.406 1.406l.076-.068 1.293-1.293V16.5a1 1 0 102 0v-4.086l1.293 1.293a1 1 0 101.414-1.414l-3-3z"
      ></path>
    </svg>
  );
};

UploadCloudFill.propTypes = {
  color: PropTypes.string
};

export default UploadCloudFill;
