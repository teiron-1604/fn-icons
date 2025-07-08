import React from 'react';
import PropTypes from 'prop-types';

const OrderPlay = props => {
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
      <g clipPath="url(#clip0_18_15613)">
        <path d="M21 18.5a1 1 0 010 2H3a1 1 0 110-2h18zm0-7a1 1 0 010 2H3a1 1 0 110-2h18zm-4.314-9.08a1 1 0 011.31-.289l.085.056 3.5 2.5A1 1 0 0121 6.5H3a1 1 0 010-2h14.88l-.961-.686-.08-.064a1 1 0 01-.152-1.33z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15613">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

OrderPlay.propTypes = {
  color: PropTypes.string
};

export default OrderPlay;
