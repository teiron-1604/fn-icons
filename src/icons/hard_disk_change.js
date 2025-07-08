import React from 'react';
import PropTypes from 'prop-types';

const HardDiskChange = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.324 2.5H4.707L2 13.5V22h11v-2H4v-4.5h9v-2H4l2.331-9h11.365l1.73 7.5h2.048l-2.15-9.5zM18 13.5V17h-3v2h3v3.5l5-4.5-5-4.5z"
      ></path>
    </svg>
  );
};

HardDiskChange.propTypes = {
  color: PropTypes.string
};

export default HardDiskChange;
