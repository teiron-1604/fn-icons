import React from 'react';
import PropTypes from 'prop-types';

const AspectRatio = props => {
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
      <g clipPath="url(#clip0_18_15070)">
        <path d="M20 6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6zm-4 9.889V13a1 1 0 112 0v2.889A2.112 2.112 0 0115.889 18H13a1 1 0 110-2h2.889c.03 0 .058-.011.079-.032.02-.021.032-.05.032-.08zM6 11V8.111A2.112 2.112 0 018.111 6H11a1 1 0 110 2H8.111a.112.112 0 00-.079.032.112.112 0 00-.032.08V11a1 1 0 11-2 0zm16 7a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h12a4 4 0 014 4v12z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15070">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

AspectRatio.propTypes = {
  color: PropTypes.string
};

export default AspectRatio;
