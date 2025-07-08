import React from 'react';
import PropTypes from 'prop-types';

const Mount = props => {
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
        d="M4.8 5c-.469 0-.8.362-.8.75v3.5c0 .388.331.75.8.75h14.4c.468 0 .8-.362.8-.75v-3.5c0-.388-.332-.75-.8-.75H4.8zM2 5.75C2 4.205 3.28 3 4.8 3h14.4C20.72 3 22 4.205 22 5.75v3.5c0 1.545-1.28 2.75-2.8 2.75H13v2.137a3.708 3.708 0 012.563 2.563H21.5a1 1 0 110 2h-5.937a3.702 3.702 0 01-7.126 0H2.5a1 1 0 110-2h5.937A3.707 3.707 0 0111 14.137V12H4.8C3.28 12 2 10.795 2 9.25v-3.5zM5.6 7.5a1 1 0 011-1h.009a1 1 0 110 2h-.01a1 1 0 01-1-1zm3.6 0a1 1 0 011-1h.009a1 1 0 110 2h-.01a1 1 0 01-1-1zM12 16a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4z"
      ></path>
    </svg>
  );
};

Mount.propTypes = {
  color: PropTypes.string
};

export default Mount;
