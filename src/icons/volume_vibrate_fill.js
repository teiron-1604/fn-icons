import React from 'react';
import PropTypes from 'prop-types';

const VolumeVibrateFill = props => {
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
      <g clipPath="url(#clip0_18_15544)">
        <path d="M11.088 3.01c.25-.03.502-.005.741.074l.118.044.115.052c.224.113.42.274.576.472l.074.103.066.107c.145.255.221.544.222.838v14.597l-.005.126a1.704 1.704 0 01-2.907 1.08l-3.384-3.385A.403.403 0 006.42 17H4a2 2 0 01-1.99-1.803L2 15V9a2 2 0 012-2h2.419l.08-.008a.4.4 0 00.205-.11l3.387-3.386.092-.086c.222-.191.49-.322.78-.38l.125-.02zm8.113.215a1 1 0 011.407 1.406l-.068.076-1.96 1.959 1.96 1.96a1 1 0 010 1.414L18.58 12l1.96 1.96a1 1 0 010 1.414l-1.96 1.959 1.96 1.96.068.076a1 1 0 01-1.407 1.406l-.075-.068-2.667-2.667a1 1 0 010-1.414l1.959-1.96-1.959-1.959a1 1 0 010-1.414l1.959-1.96-1.959-1.96a1 1 0 010-1.413l2.667-2.667.075-.068z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15544">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

VolumeVibrateFill.propTypes = {
  color: PropTypes.string
};

export default VolumeVibrateFill;
