import React from 'react';
import PropTypes from 'prop-types';

const AccountBox = props => {
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
      <path d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0119.005 21H4.995A1.995 1.995 0 013 19.005V4.995zM5 5v14h14V5H5zm2.972 13.18a9.98 9.98 0 01-1.751-.978A6.994 6.994 0 0112.102 14c2.4 0 4.517 1.207 5.778 3.047a9.993 9.993 0 01-1.724 1.025A4.993 4.993 0 0012.102 16c-1.715 0-3.23.864-4.13 2.18zM12 13a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    </svg>
  );
};

AccountBox.propTypes = {
  color: PropTypes.string
};

export default AccountBox;
