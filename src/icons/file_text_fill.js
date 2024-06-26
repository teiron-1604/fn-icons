import React from 'react';
import PropTypes from 'prop-types';

const FileTextFill = props => {
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
      <path d="M21 9v11.993A1 1 0 0120.007 22H3.993A.993.993 0 013 21.008V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 001 1h6zm0-2h-5V2.003L21 7zM8 7v2h3V7H8zm0 4v2h8v-2H8zm0 4v2h8v-2H8z"></path>
    </svg>
  );
};

FileTextFill.propTypes = {
  color: PropTypes.string
};

FileTextFill.defaultProps = {
  color: 'currentColor'
};

export default FileTextFill;
