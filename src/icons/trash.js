import React from 'react';
import PropTypes from 'prop-types';

const Trash = props => {
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
        d="M9.332 3.332C9.097 3.567 9 3.825 9 4v1h6V4c0-.175-.098-.433-.332-.668C14.433 3.097 14.175 3 14 3h-4c-.175 0-.433.097-.668.332zM17 5V4c0-.825-.402-1.567-.918-2.082C15.567 1.403 14.825 1 14 1h-4c-.825 0-1.567.403-2.082.918C7.403 2.433 7 3.175 7 4v1H3a1 1 0 000 2h1v13c0 .825.403 1.567.918 2.082C5.433 22.597 6.175 23 7 23h10c.825 0 1.567-.402 2.082-.918.515-.515.918-1.257.918-2.082V7h1a1 1 0 100-2h-4zM6 7v13c0 .175.097.433.332.668.235.235.493.332.668.332h10c.175 0 .433-.098.668-.332.235-.235.332-.493.332-.668V7H6zm4 3a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zm4 0a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z"
      ></path>
    </svg>
  );
};

Trash.propTypes = {
  color: PropTypes.string
};

export default Trash;
