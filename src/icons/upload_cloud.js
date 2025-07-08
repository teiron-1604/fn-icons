import React from 'react';
import PropTypes from 'prop-types';

const UploadCloud = props => {
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
      <path d="M12.406 2.01c4.025.188 7.32 3.15 8.028 7.017a7.148 7.148 0 012.986 5.816l-.01.368a7.158 7.158 0 01-6.78 6.78l-.367.009c-.105 0-.206-.005-.302-.01-.049.005-.107.01-.171.01H8.21c-.066 0-.127-.005-.177-.01l-.297.01a7.158 7.158 0 01-7.148-6.79l-.01-.367a7.15 7.15 0 012.985-5.816C4.293 5.03 7.79 2 11.998 2l.407.01zM12 4a6.58 6.58 0 00-6.524 5.74 1 1 0 01-.463.723 5.153 5.153 0 00-2.434 4.38l.007.265A5.158 5.158 0 007.736 20l.29-.009h.095c.032 0 .063.004.095.008L8.23 20h7.538a.527.527 0 00.014-.002l.096-.008c.031-.001.063 0 .095.001.103.006.199.009.29.009l.265-.007a5.158 5.158 0 002.457-9.53 1 1 0 01-.462-.723 6.58 6.58 0 00-6.211-5.733L11.998 4zm-.63 5.225a1 1 0 011.337.068l3 3a1 1 0 11-1.414 1.414l-1.293-1.293V16.5a1 1 0 11-2 0v-4.086l-1.293 1.293-.076.068a1 1 0 01-1.406-1.406l.068-.076 3-3 .076-.068z"></path>
    </svg>
  );
};

UploadCloud.propTypes = {
  color: PropTypes.string
};

export default UploadCloud;
