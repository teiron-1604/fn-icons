import React from 'react';
import PropTypes from 'prop-types';

const FileUserFill = props => {
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
      <path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM7.527 17h8.946a4.5 4.5 0 00-8.946 0z"></path>
    </svg>
  );
};

FileUserFill.propTypes = {
  color: PropTypes.string
};

export default FileUserFill;
