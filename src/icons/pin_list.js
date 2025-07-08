import React from 'react';
import PropTypes from 'prop-types';

const PinList = props => {
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
      <g clipPath="url(#clip0_85_25)">
        <path d="M0 0h24L0 24V0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_85_25">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PinList.propTypes = {
  color: PropTypes.string
};

export default PinList;
