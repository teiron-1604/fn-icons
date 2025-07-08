import React from 'react';
import PropTypes from 'prop-types';

const Mv = props => {
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
      <g clipPath="url(#clip0_18_15298)">
        <path d="M12 2h7a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h7zM5 4a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H5zm11.102 2.005A1 1 0 0116 8h-1.586a.414.414 0 00-.414.414V15a3 3 0 11-2-2.83V6.69c0-.381.309-.69.69-.69H16l.102.005z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15298">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Mv.propTypes = {
  color: PropTypes.string
};

export default Mv;
