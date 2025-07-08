import React from 'react';
import PropTypes from 'prop-types';

const UserSharedFill = props => {
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
      <path d="M16.792 14.293a1 1 0 011.337-.068l.077.068 2.5 2.5.068.076a1 1 0 010 1.262l-.068.076-2.5 2.5a1 1 0 11-1.414-1.414l.793-.793h-3.086a1 1 0 110-2h3.086l-.793-.793-.069-.076a1 1 0 01.069-1.338z"></path>
      <path d="M12.233 13.69a6.47 6.47 0 00-1.234 3.81c0 1.082.265 2.102.733 3H4.129a1.002 1.002 0 01-.936-1.352c1.401-3.72 5.205-5.461 8.806-5.461.077 0 .156 0 .234.003z"></path>
      <path d="M12 2.25c1.152 0 2.105.645 2.734 1.51.63.868.988 2.016.988 3.24 0 1.214-.34 2.363-.965 3.234-.628.877-1.586 1.516-2.756 1.516-1.171 0-2.13-.639-2.758-1.516-.625-.871-.965-2.02-.965-3.234 0-1.223.359-2.372.988-3.24.629-.865 1.584-1.51 2.735-1.51z"></path>
    </svg>
  );
};

UserSharedFill.propTypes = {
  color: PropTypes.string
};

export default UserSharedFill;
