import React from 'react';
import PropTypes from 'prop-types';

const FileVideo = props => {
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
      <path d="M15 4v4h4v12H5V4h10zM3.998 2A.995.995 0 003 2.992v18.016a1 1 0 00.993.992h16.014A1 1 0 0021 20.992V7l-5-5H3.998zm11.003 9.667l-4.88-3.253a.4.4 0 00-.621.333v6.505a.4.4 0 00.622.333L15 12.333a.401.401 0 000-.666z"></path>
    </svg>
  );
};

FileVideo.propTypes = {
  color: PropTypes.string
};

export default FileVideo;
