import React from 'react';
import PropTypes from 'prop-types';

const UserUnfollow = props => {
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
      <path d="M20.193 15.293a1 1 0 111.414 1.414L19.814 18.5l1.793 1.793a1 1 0 11-1.414 1.414L18.4 19.914l-1.793 1.793a1 1 0 11-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 111.414-1.414l1.793 1.793 1.793-1.793z"></path>
      <path d="M3.193 19.148c1.472-3.907 5.587-5.63 9.354-5.449l.102.01a1.001 1.001 0 01-.198 1.988l-.3-.01c-2.55-.042-4.987.942-6.352 2.812l5.7.001a1 1 0 01.103 1.995l-.103.005h-7.37a1.002 1.002 0 01-.936-1.352z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.25c1.152 0 2.105.645 2.734 1.51.63.868.988 2.016.988 3.24 0 1.214-.34 2.363-.964 3.234-.629.877-1.587 1.516-2.757 1.516-1.171 0-2.13-.639-2.758-1.516-.625-.871-.965-2.02-.965-3.234 0-1.223.359-2.372.988-3.24.629-.865 1.584-1.51 2.735-1.51zm0 2c-.351 0-.76.195-1.116.686-.355.49-.606 1.217-.606 2.064 0 .857.243 1.584.59 2.07.345.48.748.68 1.133.68.384 0 .787-.201 1.13-.68.348-.486.591-1.213.591-2.07 0-.848-.25-1.574-.606-2.064-.356-.491-.763-.686-1.115-.686z"
      ></path>
    </svg>
  );
};

UserUnfollow.propTypes = {
  color: PropTypes.string
};

export default UserUnfollow;
