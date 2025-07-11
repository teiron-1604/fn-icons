import React from 'react';
import PropTypes from 'prop-types';

const FileCloudFill = props => {
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
      <path d="M14.997 2L21 8l.001 4.26A5.466 5.466 0 0017.5 11l-.221.004a5.503 5.503 0 00-5.127 4.205l-.016.074-.03.02A4.75 4.75 0 0010.878 22H3.993a.993.993 0 01-.986-.876L3 21.008V2.992c0-.498.387-.927.885-.985L4.002 2h10.995zM17.5 13a3.5 3.5 0 013.5 3.5l-.001.103a2.75 2.75 0 01-.581 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 01-.579-5.392L14 16.5a3.5 3.5 0 013.5-3.5z"></path>
    </svg>
  );
};

FileCloudFill.propTypes = {
  color: PropTypes.string
};

export default FileCloudFill;
