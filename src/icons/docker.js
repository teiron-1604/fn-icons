import React from 'react';
import PropTypes from 'prop-types';

const Docker = props => {
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
      <g clipPath="url(#clip0_1707_178)">
        <path d="M12.441 2.283h-2.5v2.5h2.5v-2.5z"></path>
        <path d="M5.992 5.513h-2.5v2.5h2.5v-2.5z"></path>
        <path d="M5.038 15.593a1.07 1.07 0 111.19 1.78 1.07 1.07 0 01-1.19-1.78z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.602 10.493a2.339 2.339 0 00-.77-.29l-.49-.08h-.2a5.66 5.66 0 00-1.8.16 3.57 3.57 0 00-.35-1.41 4.234 4.234 0 00-.24-.4 5.22 5.22 0 00-1.09-1.12l-.39-.27-.28.4a4.15 4.15 0 00-.58 1.44 4.77 4.77 0 00-.07 1.36c.042.342.126.678.25 1 .101.252.24.488.41.7a4.57 4.57 0 01-2 .59 38.182 38.182 0 01-4 .07H-.008v.42c.011.53.061 1.057.15 1.58a8.8 8.8 0 001.69 4.06c.184.237.384.461.6.67a8.599 8.599 0 006.4 2.33c4.6 0 8.54-2.46 11-8.44v-.09h.16a4.49 4.49 0 002.89-.74l.11-.15c.31-.283.565-.623.75-1l.26-.52-.4-.27zm-9.61 7.55a8.34 8.34 0 01-5.14 1.61 6.63 6.63 0 01-5-1.74 4.86 4.86 0 01-.44-.49 6.74 6.74 0 01-1.24-2.83h13.22a12.81 12.81 0 001.6-.18 11.082 11.082 0 01-3 3.63z"
        ></path>
        <path d="M.332 8.783h2.5v2.5h-2.5v-2.5z"></path>
        <path d="M5.992 8.783h-2.5v2.5h2.5v-2.5z"></path>
        <path d="M6.684 8.783h2.5v2.5h-2.5v-2.5z"></path>
        <path d="M12.441 8.783h-2.5v2.5h2.5v-2.5z"></path>
        <path d="M13.223 8.783h2.5v2.5h-2.5v-2.5z"></path>
        <path d="M9.184 5.513h-2.5v2.5h2.5v-2.5z"></path>
        <path d="M9.941 5.513h2.5v2.5h-2.5v-2.5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1707_178">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Docker.propTypes = {
  color: PropTypes.string
};

export default Docker;
