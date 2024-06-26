import React from 'react';
import PropTypes from 'prop-types';

const AdminFill = props => {
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
      <g clipPath="url(#clip0_18_15847)">
        <path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 016 0v1zm-2 0v-1a1 1 0 00-2 0v1h2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15847">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

AdminFill.propTypes = {
  color: PropTypes.string
};

AdminFill.defaultProps = {
  color: 'currentColor'
};

export default AdminFill;
