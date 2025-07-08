import React from 'react';
import PropTypes from 'prop-types';

const ListSettings = props => {
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
      <g clipPath="url(#clip0_18_11618)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.384 14.582a.852.852 0 011.615.538l-.033.1c.272.193.514.425.719.687l.148-.06a.85.85 0 01.632 1.582l-.102.04a3.432 3.432 0 01.02.904l.035.01A.852.852 0 0119.88 20l-.1-.033a3.425 3.425 0 01-.687.719l.058.148a.85.85 0 11-1.58.632l-.04-.102a3.433 3.433 0 01-.904.02l-.01.035A.852.852 0 0115 20.88l.033-.1a3.424 3.424 0 01-.72-.687l-.147.058a.85.85 0 11-.632-1.58l.102-.04a3.433 3.433 0 01-.02-.904l-.035-.01A.852.852 0 0114.12 16l.1.033c.193-.272.425-.514.687-.719l-.06-.148a.85.85 0 011.582-.632l.04.102a3.432 3.432 0 01.904-.02l.01-.035zM17 16.298a1.7 1.7 0 00-.494.073.854.854 0 01-.383.17 1.702 1.702 0 00-.752 1.953.854.854 0 01.17.383 1.702 1.702 0 001.953.752.854.854 0 01.383-.17 1.702 1.702 0 00.752-1.953.854.854 0 01-.17-.383A1.702 1.702 0 0017 16.298z"
        ></path>
        <path d="M11 17a1 1 0 110 2H4a1 1 0 110-2h7z"></path>
        <path d="M20 11a1 1 0 110 2H4a1 1 0 110-2h16z"></path>
        <path d="M20 5a1 1 0 110 2H4a1 1 0 010-2h16z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_11618">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ListSettings.propTypes = {
  color: PropTypes.string
};

export default ListSettings;
