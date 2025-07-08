import React from 'react';
import PropTypes from 'prop-types';

const LinkUnlinkM = props => {
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
      <g clipPath="url(#clip0_18_14345)">
        <path d="M3 12a5 5 0 013.003-4.583l-2.71-2.71-.068-.076A1 1 0 014.63 3.224l.076.069 16 16 .068.076a1 1 0 01-1.406 1.406l-.076-.068L11.586 13H8.8a1 1 0 010-2h.786L7.613 9.027A2.997 2.997 0 008 15h1.6l.102.005a1 1 0 010 1.99L9.6 17H8a5 5 0 01-5-5zm13-5l.347.011A5.002 5.002 0 0120 15l-.065.079a1.001 1.001 0 01-1.535-1.28l.12-.17a3.001 3.001 0 00-2.312-4.622L16 9h-1.6a1 1 0 110-2H16z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14345">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

LinkUnlinkM.propTypes = {
  color: PropTypes.string
};

export default LinkUnlinkM;
