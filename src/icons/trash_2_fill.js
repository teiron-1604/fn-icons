import React from 'react';
import PropTypes from 'prop-types';

const Trash2Fill = props => {
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
      <path d="M14 1c.825 0 1.567.403 2.082.918C16.597 2.433 17 3.175 17 4v1h4a1 1 0 110 2h-1v13c0 .825-.403 1.567-.918 2.082-.515.515-1.257.918-2.082.918H7c-.825 0-1.567-.403-2.082-.918C4.403 21.567 4 20.825 4 20V7H3a1 1 0 010-2h4V4c0-.825.403-1.567.918-2.082C8.433 1.403 9.175 1 10 1h4zm-4 2c-.175 0-.433.097-.668.332C9.097 3.567 9 3.825 9 4v1h6V4c0-.175-.097-.433-.332-.668C14.433 3.097 14.175 3 14 3h-4z"></path>
    </svg>
  );
};

Trash2Fill.propTypes = {
  color: PropTypes.string
};

export default Trash2Fill;
