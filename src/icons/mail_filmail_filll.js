import React from 'react';
import PropTypes from 'prop-types';

const MailFilmailFilll = props => {
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
      <g clipPath="url(#clip0_18_14147)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 3a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zm.49 4.628a1 1 0 00-.98 1.744l8 4.5a1 1 0 00.98 0l8-4.5a1 1 0 10-.98-1.744L12 11.853 4.49 7.628z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14147">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

MailFilmailFilll.propTypes = {
  color: PropTypes.string
};

export default MailFilmailFilll;
