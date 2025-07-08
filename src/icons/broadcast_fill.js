import React from 'react';
import PropTypes from 'prop-types';

const BroadcastFill = props => {
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
      <g clipPath="url(#clip0_18_15839)">
        <path d="M4.19 1.193a1 1 0 011.415 1.414c-3.4 3.4-3.506 8.918-.319 12.45l.319.336.069.075a1 1 0 01-1.407 1.407l-.077-.068-.39-.41C-.095 12.08.035 5.349 4.19 1.193zM21.022 8.95a8.96 8.96 0 00-2.326-6.023l-.304-.32-.07-.075a1 1 0 011.407-1.409l.075.069.373.39a10.96 10.96 0 01-.373 15.126 1 1 0 11-1.412-1.416 8.96 8.96 0 002.63-6.342zM15.49 4.093c.366-.366.946-.39 1.34-.07l.074.07.215.224c2.149 2.349 2.366 5.833.729 8.48a1 1 0 11-1.7-1.053c1.191-1.927 1.01-4.423-.506-6.08l-.152-.157-.068-.076a1 1 0 01.068-1.338zm-8.412-.088a1 1 0 011.44 1.389 5.142 5.142 0 00-.67 6.28l.05.088a1 1 0 01-1.75.965l-.152-.256a7.14 7.14 0 011.082-8.466zM14.998 9a2.997 2.997 0 01-1.684 2.693l3.624 9.966.03.097a1 1 0 01-1.87.68l-.04-.095-1.215-3.34h-3.69l-1.215 3.34-.04.095a1 1 0 01-1.84-.777l3.623-9.966A2.997 2.997 0 0111.998 6a3 3 0 013 3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15839">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

BroadcastFill.propTypes = {
  color: PropTypes.string
};

export default BroadcastFill;
