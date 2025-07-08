import React from 'react';
import PropTypes from 'prop-types';

const PriceTag = props => {
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
      <g clipPath="url(#clip0_18_12695)">
        <path d="M11.469 1.015a3 3 0 011.824.864l8.706 8.706.116.123c.565.628.88 1.444.88 2.292l-.004.169A3.427 3.427 0 0122 15.415l-6.584 6.584a3.427 3.427 0 01-2.246.992l-.169.004A3.427 3.427 0 0110.585 22l-8.706-8.706a3 3 0 01-.864-1.824L1 11.172V4a3 3 0 013-3h7.172l.297.015zM4 3a1 1 0 00-1 1v7.172l.005.098a1 1 0 00.288.609l8.702 8.702.105.094c.253.206.57.32.9.32l.14-.007c.325-.032.631-.175.865-.407l6.578-6.578c.23-.233.373-.538.405-.862l.007-.141c0-.376-.148-.736-.412-1.003l-8.704-8.704a1 1 0 00-.608-.288L11.17 3H4zm3.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_12695">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PriceTag.propTypes = {
  color: PropTypes.string
};

export default PriceTag;
