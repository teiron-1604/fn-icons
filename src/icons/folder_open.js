import React from 'react';
import PropTypes from 'prop-types';

const FolderOpen = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.39 4.117A1 1 0 007.91 4H4a1 1 0 00-1 1v13a1 1 0 001 1h14.457a1 1 0 00.975-.75l1.54-6a1.001 1.001 0 00-.97-1.25H9.254a1 1 0 00-.86.55l-.006.01-1.5 2.9a1 1 0 01-1.776-.92l1.498-2.895A3 3 0 019.217 9H19V8a1 1 0 00-1-1h-5.93a3 3 0 01-2.502-1.345L8.755 4.45a1 1 0 00-.365-.333zM21 9.17s.216.084.32.135a3 3 0 011.588 3.444l-1.54 6.001A3 3 0 0118.447 21h.003v-1l-.007 1h.004H4a3 3 0 01-3-3V5a3 3 0 013-3h3.896-.006l.01 1V2h-.004a3 3 0 012.526 1.345l.813 1.205a1 1 0 00.835.45H18a3 3 0 013 3v1.17z"
      ></path>
    </svg>
  );
};

FolderOpen.propTypes = {
  color: PropTypes.string
};

export default FolderOpen;
