import React from 'react';
import PropTypes from 'prop-types';

const UploadIn = props => {
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
      <path d="M4 19h16v-7h2v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z"></path>
    </svg>
  );
};

UploadIn.propTypes = {
  color: PropTypes.string
};

UploadIn.defaultProps = {
  color: 'currentColor'
};

export default UploadIn;
