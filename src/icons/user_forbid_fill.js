import React from 'react';
import PropTypes from 'prop-types';

const UserForbidFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.499 12.5a5 5 0 110 10 5 5 0 010-10zm-1.293 7.708a3 3 0 004-4.001l-4 4.001zm1.293-5.708a3 3 0 00-2.708 4.293l4-4.001A2.988 2.988 0 0017.5 14.5z"
      ></path>
      <path d="M12.233 13.69a6.47 6.47 0 00-1.234 3.81c0 1.082.265 2.102.733 3H4.129a1.002 1.002 0 01-.936-1.352c1.401-3.72 5.205-5.461 8.806-5.461.077 0 .156 0 .234.003z"></path>
      <path d="M12 2.25c1.152 0 2.105.645 2.734 1.51.63.868.988 2.016.988 3.24 0 1.214-.34 2.363-.965 3.234-.628.877-1.586 1.516-2.756 1.516-1.171 0-2.13-.639-2.758-1.516-.625-.871-.965-2.02-.965-3.234 0-1.223.359-2.372.988-3.24.629-.865 1.584-1.51 2.735-1.51z"></path>
    </svg>
  );
};

UserForbidFill.propTypes = {
  color: PropTypes.string
};

export default UserForbidFill;
