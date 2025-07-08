import React from 'react';
import PropTypes from 'prop-types';

const LocationFill = props => {
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
      <g clipPath="url(#clip0_18_12803)">
        <path d="M12 1a9 9 0 019 9c0 2.834-1.553 5.603-3.206 7.775-1.677 2.203-3.584 3.956-4.54 4.78a2 2 0 01-2.51 0c-.954-.824-2.862-2.577-4.538-4.78C4.553 15.603 3 12.834 3 10a9 9 0 019-9zm0 5a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12803">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

LocationFill.propTypes = {
  color: PropTypes.string
};

export default LocationFill;
