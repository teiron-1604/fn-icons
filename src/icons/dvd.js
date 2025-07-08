import React from 'react';
import PropTypes from 'prop-types';

const Dvd = props => {
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
      <g clipPath="url(#clip0_18_15143)">
        <path d="M20.5 3a2 2 0 012 2v14a2 2 0 01-2 2h-17a2 2 0 01-2-2V5a2 2 0 012-2h17zm-17 14v2h2v-2h-2zm4 2h13V5h-13v14zM14 6.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM3.5 15h2v-2h-2v2zM14 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM3.5 11h2V9h-2v2zm0-4h2V5h-2v2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15143">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Dvd.propTypes = {
  color: PropTypes.string
};

export default Dvd;
