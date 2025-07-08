import React from 'react';
import PropTypes from 'prop-types';

const ShareCircle = props => {
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
      <g clipPath="url(#clip0_18_14869)">
        <path d="M12 1a1 1 0 110 2 9 9 0 109 9 1 1 0 012 0A11 11 0 1112 1zm11 7a1 1 0 11-2 0V4.414l-8.293 8.293a1 1 0 11-1.414-1.414L19.586 3H16a1 1 0 010-2h6l.103.005A1 1 0 0123 2v6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14869">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ShareCircle.propTypes = {
  color: PropTypes.string
};

export default ShareCircle;
