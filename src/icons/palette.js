import React from 'react';
import PropTypes from 'prop-types';

const Palette = props => {
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
      <g clipPath="url(#clip0_1496_165)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1C5.948 1 1 5.948 1 12s4.948 11 11 11c1.503 0 2.648-1.219 2.648-2.688a2.712 2.712 0 00-.731-1.833c-.083-.083-.144-.183-.144-.417v-.017a.64.64 0 01.65-.651h2.014c3.603 0 6.555-2.95 6.555-6.554v-.006C22.962 5.352 17.9 1 12 1zM3 12c0-4.948 4.052-9 9-9 5.02 0 8.967 3.67 8.992 7.843-.002 2.497-2.057 4.551-4.555 4.551h-1.988a2.639 2.639 0 00-2.676 2.677c.002.694.228 1.307.703 1.795.109.13.172.29.172.446 0 .415-.3.688-.648.688-4.948 0-9-4.052-9-9zm10.5-7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-11 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1496_165">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Palette.propTypes = {
  color: PropTypes.string
};

export default Palette;
