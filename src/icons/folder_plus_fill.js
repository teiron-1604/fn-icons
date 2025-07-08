import React from 'react';
import PropTypes from 'prop-types';

const FolderPlusFill = props => {
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
        d="M1.879 3.879A3 3 0 014 3h3.93a3 3 0 012.502 1.345l.813 1.205a1 1 0 00.845.45H20a3 3 0 013 3v10a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 01.879-2.121zM13 11a1 1 0 10-2 0v2H9a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2v-2z"
      ></path>
    </svg>
  );
};

FolderPlusFill.propTypes = {
  color: PropTypes.string
};

export default FolderPlusFill;
