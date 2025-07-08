import React from 'react';
import PropTypes from 'prop-types';

const Inbox = props => {
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
      <g clipPath="url(#clip0_18_14105)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.24 3h9.52a3.002 3.002 0 012.685 1.665l3.45 6.887A1 1 0 0123 12v6a3 3 0 01-3 3H4a3 3 0 01-3-3v-6a1 1 0 01.106-.448l3.448-6.887.001-.001A3 3 0 017.24 3zm0 2a1 1 0 00-.894.555l-.002.003L3.62 11H8a1 1 0 01.832.445L10.535 14h2.93l1.703-2.555A1 1 0 0116 11h4.38l-2.724-5.442-.002-.003A1 1 0 0016.76 5H7.24zM21 13h-4.465l-1.703 2.555A1 1 0 0114 16h-4a1 1 0 01-.832-.445L7.465 13H3v5a1 1 0 001 1h16a1 1 0 001-1v-5z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14105">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Inbox.propTypes = {
  color: PropTypes.string
};

export default Inbox;
