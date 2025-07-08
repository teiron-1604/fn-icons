import React from 'react';
import PropTypes from 'prop-types';

const CloudOffFill = props => {
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
      <g clipPath="url(#clip0_18_15799)">
        <path d="M1.293 1.293a1 1 0 011.338-.068l.076.068 1.505 1.505.01.009 17.677 17.678.008.009.8.8.068.075a1 1 0 01-1.406 1.407l-.076-.069-.8-.8-.009-.007-1.306-1.308A5.987 5.987 0 0117 21H7a6.003 6.003 0 01-5.918-4.99 6 6 0 013.926-6.67 6.994 6.994 0 01.352-2.564L2.806 4.222l-.008-.01-1.505-1.505-.069-.076a1 1 0 01.069-1.338zM17 9a6.004 6.004 0 015.204 8.99L14.01 9.796C14.89 9.29 15.91 9 17 9zm-5-7a7.004 7.004 0 016.765 5.195 8.028 8.028 0 00-6.207 1.15L7.693 3.48A6.971 6.971 0 0112 2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15799">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CloudOffFill.propTypes = {
  color: PropTypes.string
};

export default CloudOffFill;
