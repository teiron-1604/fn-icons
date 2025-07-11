import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
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
      <path d="M11.999 13.686c3.6 0 7.404 1.742 8.806 5.461a1 1 0 01-.936 1.353H4.129a1 1 0 01-.936-1.353c1.402-3.72 5.205-5.46 8.806-5.46zm6.204 4.814c-1.336-1.833-3.702-2.814-6.204-2.814s-4.868.981-6.204 2.814h12.408z"></path>
      <path d="M13.722 7.15c0-.848-.25-1.574-.606-2.065-.356-.49-.763-.685-1.115-.685s-.76.194-1.116.685c-.356.49-.607 1.217-.607 2.065 0 .857.243 1.584.59 2.07.345.48.748.68 1.133.68.384 0 .787-.201 1.13-.68.348-.486.591-1.213.591-2.07zm2 0c0 1.214-.34 2.362-.964 3.234-.629.877-1.586 1.516-2.757 1.516s-2.13-.639-2.758-1.516c-.625-.872-.965-2.02-.965-3.234 0-1.224.359-2.372.988-3.24.63-.865 1.584-1.51 2.735-1.51 1.15 0 2.104.645 2.733 1.51.63.868.988 2.016.988 3.24z"></path>
    </svg>
  );
};

User.propTypes = {
  color: PropTypes.string
};

export default User;
