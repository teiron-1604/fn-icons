import React from 'react';
import PropTypes from 'prop-types';

const LinkUnlink = props => {
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
      <g clipPath="url(#clip0_18_14340)">
        <path d="M1 12a6 6 0 013.948-5.638L1.293 2.707l-.068-.076A1 1 0 012.63 1.224l.076.069 20 20 .068.076a1 1 0 01-1.406 1.406l-.076-.068L11.586 13H8a1 1 0 110-2h1.586L6.604 8.018A4 4 0 007 16h2a1 1 0 110 2H7a6 6 0 01-6-6zm16-6l.417.014A6 6 0 0121.8 15.6a1 1 0 11-1.6-1.199 4 4 0 00-2.923-6.39L17 8h-2a1 1 0 110-2h2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14340">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

LinkUnlink.propTypes = {
  color: PropTypes.string
};

export default LinkUnlink;
