import React from 'react';
import PropTypes from 'prop-types';

const Translate = props => {
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
      <g clipPath="url(#clip0_18_14365)">
        <path d="M3.136 15.368c.61 0 1.106.495 1.106 1.106v1.105a2.21 2.21 0 002.044 2.205l.166.006h2.21a1.105 1.105 0 110 2.21h-2.21a4.421 4.421 0 01-4.421-4.421v-1.105c0-.61.495-1.106 1.105-1.106zm14.797-5.526a1 1 0 01.928.629l4.064 10.158A1 1 0 0121.996 22h-.228a1 1 0 01-.928-.628l-1.076-2.688h-4.52l-1.075 2.687a1 1 0 01-.928.629h-.227a1 1 0 01-.928-1.371l4.062-10.158a1 1 0 01.929-.629h.856zm-.428 3.189l-1.378 3.443h2.754l-1.376-3.443zM6.452 1c.61 0 1.105.495 1.105 1.105v1.106h3.421a1 1 0 011 1v5.736a1 1 0 01-1 1h-3.42v2.21a1.105 1.105 0 01-2.211 0v-2.21H1.926a1 1 0 01-1-1V4.211a1 1 0 011-1h3.42V2.105c0-.61.496-1.105 1.106-1.105zm11.053 1.105a4.421 4.421 0 014.42 4.421v1.106a1.105 1.105 0 01-2.21 0V6.526a2.21 2.21 0 00-2.21-2.21h-2.21a1.105 1.105 0 010-2.21h2.21zM5.347 5.421h-2.21v3.316h2.21V5.42zm4.42 0h-2.21v3.316h2.21V5.42z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14365">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Translate.propTypes = {
  color: PropTypes.string
};

export default Translate;
