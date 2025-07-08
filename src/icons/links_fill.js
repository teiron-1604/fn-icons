import React from 'react';
import PropTypes from 'prop-types';

const LinksFill = props => {
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
      <g clipPath="url(#clip0_18_15772)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.774 2.75a6 6 0 018.484 8.485l-.013.012-3 3a6 6 0 01-9.047-.648 1 1 0 111.601-1.198 3.999 3.999 0 006.032.432l2.994-2.994a4 4 0 00-5.657-5.654l-1.715 1.704a1 1 0 01-1.41-1.418l1.72-1.71.01-.01zM7.897 8.374a6 6 0 016.902 2.028 1 1 0 11-1.601 1.198 4 4 0 00-6.033-.432l-2.993 2.994a4 4 0 005.656 5.655l1.703-1.703a1 1 0 111.414 1.414l-1.71 1.71-.012.012a6 6 0 01-8.484-8.484l.012-.012 3-3a6 6 0 012.146-1.38z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15772">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

LinksFill.propTypes = {
  color: PropTypes.string
};

export default LinksFill;
