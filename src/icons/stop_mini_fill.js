import React from 'react';
import PropTypes from 'prop-types';

const StopMiniFill = props => {
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
      <g clipPath="url(#clip0_18_15408)">
        <path d="M12 5c2.393 0 4.289.275 5.507 1.493S19 9.607 19 12s-.275 4.289-1.493 5.507S14.393 19 12 19s-4.289-.275-5.507-1.493S5 14.393 5 12s.275-4.289 1.493-5.507S9.607 5 12 5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15408">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

StopMiniFill.propTypes = {
  color: PropTypes.string
};

export default StopMiniFill;
