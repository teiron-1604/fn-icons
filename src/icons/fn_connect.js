import React from 'react';
import PropTypes from 'prop-types';

const FnConnect = props => {
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
      <path d="M13 4a1 1 0 110 2H5a1 1 0 00-1 1v4h8a1 1 0 110 2H4v6a1 1 0 11-2 0V7a3 3 0 013-3h8zm5.5 6a4.5 4.5 0 014.5 4.5V19a1 1 0 11-2 0v-4.5a2.5 2.5 0 00-5 0V19a1 1 0 11-2 0v-4.5a4.5 4.5 0 014.5-4.5z"></path>
    </svg>
  );
};

FnConnect.propTypes = {
  color: PropTypes.string
};

export default FnConnect;
