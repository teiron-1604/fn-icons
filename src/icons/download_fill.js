import React from 'react';
import PropTypes from 'prop-types';

const DownloadFill = props => {
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
      <path d="M19 20a1 1 0 110 2H5a1 1 0 110-2h14z"></path>
      <path d="M12 2a1 1 0 011 1v7h5a1 1 0 01.707 1.707l-6 6a1 1 0 01-1.414 0l-6-6A1 1 0 016 10h5V3a1 1 0 011-1z"></path>
    </svg>
  );
};

DownloadFill.propTypes = {
  color: PropTypes.string
};

export default DownloadFill;
