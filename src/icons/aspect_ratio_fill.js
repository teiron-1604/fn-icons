import React from 'react';
import PropTypes from 'prop-types';

const AspectRatioFill = props => {
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
      <g clipPath="url(#clip0_18_15076)">
        <path d="M18 2a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4h12zm-1 10a1 1 0 00-1 1v2.889c0 .03-.011.058-.032.079a.112.112 0 01-.08.032H13a1 1 0 100 2h2.889A2.112 2.112 0 0018 15.889V13a1 1 0 00-1-1zM8.111 6A2.112 2.112 0 006 8.111V11a1 1 0 102 0V8.111c0-.03.011-.058.032-.079.021-.02.05-.032.08-.032H11a1 1 0 100-2H8.111z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15076">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

AspectRatioFill.propTypes = {
  color: PropTypes.string
};

export default AspectRatioFill;
