import React from 'react';
import PropTypes from 'prop-types';

const UserFill = props => {
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
      <path d="M11.999 13.687c3.6 0 7.404 1.741 8.805 5.46a1 1 0 01-.935 1.353H4.129a1 1 0 01-.936-1.352c1.402-3.72 5.205-5.461 8.806-5.461z"></path>
      <path d="M12 2.25c1.151 0 2.105.645 2.734 1.51.63.868.988 2.016.988 3.24 0 1.214-.34 2.363-.965 3.234-.628.877-1.586 1.516-2.757 1.516-1.17 0-2.129-.639-2.757-1.516-.625-.871-.965-2.02-.965-3.234 0-1.224.359-2.372.988-3.24.629-.865 1.583-1.51 2.734-1.51z"></path>
    </svg>
  );
};

UserFill.propTypes = {
  color: PropTypes.string
};

export default UserFill;
