import React from 'react';
import PropTypes from 'prop-types';

const InboxFill = props => {
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
      <g clipPath="url(#clip0_18_14109)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.76 3H7.24a3.002 3.002 0 00-2.685 1.664v.001l-3.45 6.887A1 1 0 001 12v6a2.99 2.99 0 00.879 2.121l.01.01A2.99 2.99 0 004 21h16a2.99 2.99 0 002.144-.901A2.99 2.99 0 0023 18v-6a1 1 0 00-.106-.448l-3.448-6.887-.001-.001A3 3 0 0016.76 3zM20 11h.38l-2.724-5.442-.002-.003A1 1 0 0016.76 5H7.24a1 1 0 00-.894.555l-.002.003L3.62 11H8a1 1 0 01.832.445l.593.89.813 1.22a1 1 0 00.832.445h1.86a1 1 0 00.83-.444l.002-.001.812-1.22.594-.89A1 1 0 0116 11h4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14109">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

InboxFill.propTypes = {
  color: PropTypes.string
};

export default InboxFill;
