import React from 'react';
import PropTypes from 'prop-types';

const ServerUpFill = props => {
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
      <path d="M20 13a3 3 0 013 3v4a3 3 0 01-3 3H4a3 3 0 01-3-3v-4a3 3 0 013-3h16zM6 17a1 1 0 100 2h.01a1 1 0 100-2H6zm4 0a1 1 0 100 2h.01a1 1 0 100-2H10zm1.293-15.707a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414L13 4.414V10a1 1 0 11-2 0V4.414L8.707 6.707a1 1 0 11-1.414-1.414l4-4z"></path>
    </svg>
  );
};

ServerUpFill.propTypes = {
  color: PropTypes.string
};

export default ServerUpFill;
