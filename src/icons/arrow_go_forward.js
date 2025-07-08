import React from 'react';
import PropTypes from 'prop-types';

const ArrowGoForward = props => {
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
      <g clipPath="url(#clip0_18_12632)">
        <path d="M2.5 13.75A6.25 6.25 0 018.75 7.5h9.836l-1.793-1.793-.068-.076a1 1 0 011.406-1.407l.076.069 3.5 3.5.068.076a1 1 0 01-.068 1.338l-3.5 3.5a1 1 0 11-1.414-1.414L18.586 9.5H8.75a4.25 4.25 0 00-4.25 4.25C4.5 16.115 6.41 18 8.75 18H21a1 1 0 110 2H8.75a6.243 6.243 0 01-6.25-6.25z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12632">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ArrowGoForward.propTypes = {
  color: PropTypes.string
};

export default ArrowGoForward;
