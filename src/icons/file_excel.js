import React from 'react';
import PropTypes from 'prop-types';

const FileExcel = props => {
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
      <path d="M2.86 2.877l12.57-1.795a.5.5 0 01.571.495v20.846a.5.5 0 01-.57.495L2.859 21.123a1 1 0 01-.859-.99V3.867a1 1 0 01.859-.99h.001zm1.141 1.858v14.53l10 1.43V3.305l-10 1.43zm13 14.265h3V5h-3V3h4a1 1 0 011 1v16a1 1 0 01-1 1h-4v-2zm-6.8-7l2.8 4h-2.4l-1.6-2.286L7.401 16h-2.4l2.8-4-2.8-4h2.4l1.6 2.286L10.601 8h2.4l-2.8 4z"></path>
    </svg>
  );
};

FileExcel.propTypes = {
  color: PropTypes.string
};

export default FileExcel;
