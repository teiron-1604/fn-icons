import React from 'react';
import PropTypes from 'prop-types';

const UserSearchFill = props => {
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
        d="M17.999 14a4 4 0 013.445 6.03l1.262 1.263.068.076a1 1 0 01-1.406 1.406l-.076-.068-1.263-1.262A4 4 0 1117.999 14zm0 2a2 2 0 101.265 3.547 1.002 1.002 0 01.282-.281A2 2 0 0017.999 16z"
      ></path>
      <path d="M12.233 13.69a6.47 6.47 0 00-1.235 3.81 6.47 6.47 0 00.734 3H4.13a1.002 1.002 0 01-.936-1.352c1.401-3.72 5.205-5.461 8.806-5.461.078 0 .156 0 .234.003z"></path>
      <path d="M12 2.25c1.152 0 2.105.645 2.734 1.51.63.868.988 2.016.988 3.24 0 1.214-.34 2.363-.964 3.234-.629.877-1.587 1.516-2.757 1.516-1.171 0-2.13-.639-2.758-1.516-.625-.871-.965-2.02-.965-3.234 0-1.223.359-2.372.988-3.24.629-.865 1.584-1.51 2.735-1.51z"></path>
    </svg>
  );
};

UserSearchFill.propTypes = {
  color: PropTypes.string
};

export default UserSearchFill;
