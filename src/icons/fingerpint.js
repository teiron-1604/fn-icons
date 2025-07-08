import React from 'react';
import PropTypes from 'prop-types';

const Fingerpint = props => {
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
      <path d="M16.999 13v1c0 2.77-.664 5.445-1.915 7.846l-.227.42-1.747-.974c1.16-2.08 1.81-4.41 1.882-6.836l.007-.456v-1h2zm-6-3h2v4l-.005.379a12.941 12.941 0 01-2.691 7.549l-.231.29-1.55-1.264a10.945 10.945 0 002.47-6.588L11 14v-4zm1-4a5 5 0 015 5h-2a3 3 0 00-6 0v3c0 2.235-.82 4.344-2.271 5.977l-.212.23-1.448-1.38a6.97 6.97 0 001.925-4.524L6.999 14v-3a5 5 0 015-5zm0-4a9 9 0 019 9v3c0 1.698-.202 3.37-.597 4.99l-.14.539-1.93-.526c.393-1.437.614-2.922.659-4.435l.008-.568v-3A7 7 0 007.807 5.394L6.382 3.968A8.962 8.962 0 0111.999 2zM4.967 5.383l1.426 1.425a6.966 6.966 0 00-1.39 3.951L4.999 11l.004 2c0 1.12-.264 2.203-.762 3.177l-.156.29-1.737-.992a4.95 4.95 0 00.646-2.183L3.003 13v-2a8.94 8.94 0 011.964-5.617z"></path>
    </svg>
  );
};

Fingerpint.propTypes = {
  color: PropTypes.string
};

export default Fingerpint;
