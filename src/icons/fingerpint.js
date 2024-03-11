import React from 'react';
import PropTypes from 'prop-types';

const Fingerpint = props => {
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
      <path d="M17 13v1c0 2.77-.664 5.445-1.915 7.846l-.227.42-1.747-.974c1.16-2.08 1.81-4.41 1.882-6.836L15 14v-1h2zm-6-3h2v4l-.005.379a12.941 12.941 0 01-2.69 7.549l-.232.29-1.55-1.264a10.944 10.944 0 002.471-6.588L11 14v-4zm1-4a5 5 0 015 5h-2a3 3 0 10-6 0v3c0 2.235-.82 4.344-2.27 5.977l-.213.23-1.448-1.38a6.969 6.969 0 001.925-4.524L7 14v-3a5 5 0 015-5zm0-4a9 9 0 019 9v3c0 1.698-.202 3.37-.597 4.99l-.139.539-1.93-.526c.392-1.437.613-2.922.658-4.435L19 14v-3A7 7 0 007.808 5.394L6.383 3.968A8.962 8.962 0 0112 2zM4.968 5.383l1.426 1.425a6.966 6.966 0 00-1.39 3.951L5 11l.004 2c0 1.12-.264 2.203-.762 3.177l-.156.29-1.737-.992a4.95 4.95 0 00.646-2.183l.01-.292v-2a8.94 8.94 0 011.963-5.617z"></path>
    </svg>
  );
};

Fingerpint.propTypes = {
  color: PropTypes.string
};

Fingerpint.defaultProps = {
  color: 'currentColor'
};

export default Fingerpint;
