import React from 'react';
import PropTypes from 'prop-types';

const UserFollowFill = props => {
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
      <path d="M20.367 15.225a1 1 0 011.406 1.406l-.068.076-4 4a1 1 0 01-1.338.068l-.076-.068-2-2-.069-.076a1 1 0 011.407-1.406l.076.068 1.293 1.293 3.293-3.293.076-.068z"></path>
      <path d="M11.999 13.687c.48 0 .964.032 1.446.094a5.482 5.482 0 00-1.447 3.719c0 1.107.329 2.137.891 3H4.13a1.002 1.002 0 01-.936-1.352c1.401-3.72 5.205-5.461 8.806-5.461z"></path>
      <path d="M12 2.25c1.152 0 2.105.645 2.734 1.51.63.868.988 2.017.988 3.24 0 1.214-.34 2.363-.964 3.234-.629.877-1.587 1.516-2.757 1.516-1.171 0-2.13-.639-2.758-1.516-.625-.871-.965-2.02-.965-3.234 0-1.224.359-2.372.988-3.24.629-.865 1.584-1.51 2.735-1.51z"></path>
    </svg>
  );
};

UserFollowFill.propTypes = {
  color: PropTypes.string
};

export default UserFollowFill;
