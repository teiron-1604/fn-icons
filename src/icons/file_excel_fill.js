import React from 'react';
import PropTypes from 'prop-types';

const FileExcelFill = props => {
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
      <path d="M2.86 2.877l12.57-1.795a.5.5 0 01.571.495v20.846a.5.5 0 01-.57.495L2.859 21.123a1 1 0 01-.859-.99V3.867a1 1 0 01.859-.99h.001zM17.001 3h4a1 1 0 011 1v16a1 1 0 01-1 1h-4V3zm-6.8 9l2.8-4h-2.4l-1.6 2.286L7.401 8h-2.4l2.8 4-2.8 4h2.4l1.6-2.286 1.6 2.286h2.4l-2.8-4z"></path>
    </svg>
  );
};

FileExcelFill.propTypes = {
  color: PropTypes.string
};

export default FileExcelFill;
