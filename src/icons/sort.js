import React from 'react';
import PropTypes from 'prop-types';

const Sort = props => {
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
      <g clipPath="url(#clip0_704_80)">
        <path d="M17.138 13.51a1 1 0 01.754 1.44l-.07.12-4.5 6.5a1 1 0 01-1.644 0l-4.5-6.5A1 1 0 018 13.5h9l.138.01zM12.5 2a1 1 0 01.822.43l4.5 6.5A1 1 0 0117 10.5H8a1 1 0 01-.822-1.57l4.5-6.5.075-.095A1 1 0 0112.5 2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_704_80">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Sort.propTypes = {
  color: PropTypes.string
};

export default Sort;
