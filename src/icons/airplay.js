import React from 'react';
import PropTypes from 'prop-types';

const Airplay = props => {
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
      <g clipPath="url(#clip0_18_13323)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.992 15a1 1 0 01.741.328l4.532 5.001a1.001 1.001 0 01-.742 1.672H7.461a1.001 1.001 0 01-.741-1.672l4.531-5 .075-.075a1 1 0 01.666-.254zm-2.275 5.001h4.55l-2.275-2.512-2.275 2.512z"
        ></path>
        <path d="M20 2a3 3 0 013 3v11a3 3 0 01-3 3h-1a1 1 0 110-2h1a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v11a1 1 0 001 1h1a1 1 0 110 2H4a3 3 0 01-3-3V5a3 3 0 013-3h16z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13323">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Airplay.propTypes = {
  color: PropTypes.string
};

export default Airplay;
