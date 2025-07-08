import React from 'react';
import PropTypes from 'prop-types';

const Hashtag = props => {
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
      <g clipPath="url(#clip0_18_14310)">
        <path d="M4 9h16M4 15h16M10 3L8 21m8-18l-2 18"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.11 2.006a1 1 0 01.884 1.105L10.45 8h3.987l.568-5.111a1 1 0 111.988.22L16.45 8H20a1 1 0 110 2h-3.772l-.444 4H20a1 1 0 110 2h-4.438l-.568 5.11a1 1 0 01-1.988-.22L13.55 16H9.562l-.568 5.11a1 1 0 01-1.988-.22L7.55 16H4a1 1 0 110-2h3.772l.444-4H4a1 1 0 010-2h4.438l.568-5.11a1 1 0 011.104-.884zM10.228 10l-.444 4h3.988l.444-4h-3.988z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14310">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Hashtag.propTypes = {
  color: PropTypes.string
};

export default Hashtag;
