import React from 'react';
import PropTypes from 'prop-types';

const ShareForward = props => {
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
      <g clipPath="url(#clip0_18_14839)">
        <path d="M12.617 1.076a1 1 0 011.09.217l9 9a1 1 0 01-.02 1.434l-9 8.5A1 1 0 0112 19.5v-4.44c-2.593.308-4.52 1.789-5.87 3.345a14.404 14.404 0 00-2.081 3.196 7.641 7.641 0 00-.116.261l-.004.01-.001.001A1 1 0 012 21.5c0-4.311.627-8.046 2.346-10.728C5.969 8.24 8.489 6.764 12 6.532V2a1 1 0 01.617-.924zM14 7.5a1 1 0 01-1 1c-3.463 0-5.62 1.244-6.97 3.352-.932 1.453-1.517 3.375-1.808 5.723.127-.159.258-.32.397-.48C6.352 15.095 9.105 13 13 13a1 1 0 011 1v3.18l6.565-6.2L14 4.413V7.5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14839">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ShareForward.propTypes = {
  color: PropTypes.string
};

export default ShareForward;
