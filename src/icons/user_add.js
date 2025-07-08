import React from 'react';
import PropTypes from 'prop-types';

const UserAdd = props => {
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
      <path d="M17.5 13a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2h-2a1 1 0 110-2h2v-2a1 1 0 011-1z"></path>
      <path d="M3.193 19.148c1.472-3.907 5.587-5.63 9.354-5.449l.103.01a1.001 1.001 0 01-.198 1.988l-.302-.01c-2.549-.042-4.986.942-6.351 2.812l5.7.001a1 1 0 01.103 1.995l-.103.005h-7.37a1.002 1.002 0 01-.936-1.352z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.002 2.25c1.15 0 2.104.645 2.733 1.51.63.868.988 2.017.988 3.24 0 1.214-.34 2.363-.965 3.234-.628.877-1.586 1.516-2.756 1.516-1.171 0-2.13-.639-2.758-1.516-.625-.871-.965-2.02-.965-3.234 0-1.224.359-2.372.988-3.24.629-.865 1.584-1.51 2.735-1.51zm0 2c-.352 0-.76.195-1.117.686-.355.49-.606 1.216-.606 2.064 0 .857.243 1.584.59 2.07.345.48.748.68 1.133.68.384 0 .787-.201 1.13-.68.348-.486.591-1.213.591-2.07 0-.847-.25-1.574-.606-2.064-.356-.491-.763-.686-1.115-.686z"
      ></path>
    </svg>
  );
};

UserAdd.propTypes = {
  color: PropTypes.string
};

export default UserAdd;
