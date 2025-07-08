import React from 'react';
import PropTypes from 'prop-types';

const UserAddFill = props => {
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
      <path d="M17.502 13a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2h-2a1 1 0 110-2h2v-2a1 1 0 011-1z"></path>
      <path d="M12.003 13.687c.48 0 .965.032 1.447.094a5.48 5.48 0 00-1.447 3.719c0 1.107.328 2.137.891 3H4.132a1.002 1.002 0 01-.935-1.352c1.401-3.72 5.205-5.461 8.806-5.461z"></path>
      <path d="M12.005 2.25c1.15 0 2.104.645 2.733 1.51.63.868.988 2.017.988 3.24 0 1.214-.34 2.363-.965 3.234-.628.877-1.586 1.516-2.756 1.516-1.171 0-2.13-.639-2.758-1.516-.625-.871-.965-2.02-.965-3.234 0-1.224.359-2.372.988-3.24.629-.865 1.584-1.51 2.735-1.51z"></path>
    </svg>
  );
};

UserAddFill.propTypes = {
  color: PropTypes.string
};

export default UserAddFill;
