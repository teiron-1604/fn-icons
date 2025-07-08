import React from 'react';
import PropTypes from 'prop-types';

const ForbidFill = props => {
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
      <g clipPath="url(#clip0_598_62)">
        <path d="M19.073 19.071c-3.906 3.905-10.237 3.905-14.143 0-3.905-3.905-3.905-10.237 0-14.142 3.906-3.905 10.237-3.905 14.143 0 3.905 3.905 3.905 10.237 0 14.142zM6.084 11a6.04 6.04 0 000 2H17.92a6.046 6.046 0 000-2H6.084z"></path>
      </g>
      <defs>
        <clipPath id="clip0_598_62">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ForbidFill.propTypes = {
  color: PropTypes.string
};

export default ForbidFill;
