import React from 'react';
import PropTypes from 'prop-types';

const Radar = props => {
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
      <g clipPath="url(#clip0_18_13555)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1c3.05 0 5.812 1.243 7.804 3.248a1 1 0 01-.006 1.415l-5.132 5.075c.182.383.287.81.287 1.262A2.953 2.953 0 1112 9.047c.447 0 .87.102 1.249.28l4.389-4.34a9 9 0 103.254 5.61l-.083-.453-.016-.102a1 1 0 011.947-.408l.026.1.101.553c.088.559.133 1.13.133 1.713 0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 9.953a1.047 1.047 0 100 2.094 1.047 1.047 0 000-2.094z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13555">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Radar.propTypes = {
  color: PropTypes.string
};

export default Radar;
