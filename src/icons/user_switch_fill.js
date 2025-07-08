import React from 'react';
import PropTypes from 'prop-types';

const UserSwitchFill = props => {
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
      <path d="M21.191 18.105a.9.9 0 01-.093 1.795h-3.29l1.214.868a.901.901 0 01-1.047 1.464l-3.5-2.5A.9.9 0 0115 18.1h6.1l.092.005z"></path>
      <path d="M11.999 13.687c.48 0 .965.032 1.447.094a5.481 5.481 0 00-1.447 3.719c0 1.107.328 2.137.891 3H4.13a1.002 1.002 0 01-.936-1.352c1.401-3.72 5.205-5.461 8.806-5.461z"></path>
      <path d="M17.862 13.363a.901.901 0 011.273 0l2.5 2.5A.901.901 0 0121 17.4h-6.1a.9.9 0 01-.895-.808l-.005-.092.005-.092a.9.9 0 01.802-.804l.093-.004h3.927l-.964-.963a.9.9 0 010-1.274z"></path>
      <path d="M12 2.25c1.151 0 2.105.645 2.734 1.51.63.868.988 2.017.988 3.24 0 1.214-.34 2.363-.965 3.234-.628.877-1.586 1.516-2.756 1.516-1.171 0-2.13-.639-2.758-1.516-.625-.871-.965-2.02-.965-3.234 0-1.223.359-2.372.988-3.24.629-.865 1.584-1.51 2.735-1.51z"></path>
    </svg>
  );
};

UserSwitchFill.propTypes = {
  color: PropTypes.string
};

export default UserSwitchFill;
