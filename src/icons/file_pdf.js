import React from 'react';
import PropTypes from 'prop-types';

const FilePdf = props => {
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
      <path d="M12 16H8V8h4a4 4 0 110 8zm-2-6v4h2a2 2 0 000-4h-2zm5-6H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992z"></path>
    </svg>
  );
};

FilePdf.propTypes = {
  color: PropTypes.string
};

export default FilePdf;
