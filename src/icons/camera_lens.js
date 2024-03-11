import React from 'react';
import PropTypes from 'prop-types';

const CameraLens = props => {
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
      <path d="M9.858 19.71L12 16H5.07a8.018 8.018 0 004.788 3.71zM4.252 14h4.284L5.07 7.999A7.963 7.963 0 004 12c0 .69.088 1.36.252 2zm2.143-7.708L8.535 10 12 4a7.974 7.974 0 00-5.605 2.292zm7.747-2.002L12 8h6.93a8.018 8.018 0 00-4.788-3.71zM19.748 10h-4.284l3.465 6.001A7.962 7.962 0 0020 12c0-.69-.088-1.36-.252-2zm-2.143 7.708L15.465 14 12 20a7.974 7.974 0 005.605-2.292zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.155-12h-2.31l-1.154 2 1.154 2h2.31l1.154-2-1.154-2z"></path>
    </svg>
  );
};

CameraLens.propTypes = {
  color: PropTypes.string
};

CameraLens.defaultProps = {
  color: 'currentColor'
};

export default CameraLens;
