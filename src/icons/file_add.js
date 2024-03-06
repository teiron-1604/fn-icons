import React from 'react';
import PropTypes from 'prop-types';

const FileAdd = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zM11 11V8h2v3h3v2h-3v3h-2v-3H8v-2h3z"></path>
    </svg>
  );
};

FileAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileAdd;
