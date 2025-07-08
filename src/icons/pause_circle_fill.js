import React from 'react';
import PropTypes from 'prop-types';

const PauseCircleFill = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_15338)">
        <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm-2 7a1 1 0 00-1 1v6a1 1 0 102 0V9a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v6a1 1 0 102 0V9a1 1 0 00-1-1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15338">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PauseCircleFill.propTypes = {
  color: PropTypes.string
};

export default PauseCircleFill;
