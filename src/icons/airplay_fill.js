import React from 'react';
import PropTypes from 'prop-types';

const AirplayFill = props => {
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
      <g clipPath="url(#clip0_18_13329)">
        <path d="M12 15c.272 0 .53.115.704.315l4.583 5.25c.228.26.277.624.126.931a.922.922 0 01-.83.504H7.417a.923.923 0 01-.831-.504.845.845 0 01.126-.931l4.584-5.25A.936.936 0 0112 15z"></path>
        <path d="M20 2a3 3 0 013 3v11a3 3 0 01-3 3h-1a1 1 0 110-2h1a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v11a1 1 0 001 1h1a1 1 0 110 2H4a3 3 0 01-3-3V5a3 3 0 013-3h16z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13329">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

AirplayFill.propTypes = {
  color: PropTypes.string
};

export default AirplayFill;
