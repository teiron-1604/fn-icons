import React from 'react';
import PropTypes from 'prop-types';

const DataupgradeFill = props => {
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
      <g clipPath="url(#clip0_1906_214)">
        <path d="M14.81 16.594a.5.5 0 01-.437.743h-.753a3.42 3.42 0 005.774 2.156.311.311 0 01.487.073l.465.837a.312.312 0 01-.069.387 4.974 4.974 0 01-7.325-6.62.311.311 0 01.526.028l1.332 2.396zM2 13.917c0 2.368 3.53 4.323 8.104 4.622.53.035.979.399 1.184.889.155.37.345.722.566 1.052.32.479.049 1.21-.528 1.21C6.176 21.69 2 19.601 2 17.025v-3.109zm15.025-1.865A4.975 4.975 0 0121.1 19.88a.311.311 0 01-.527-.028l-1.331-2.395a.5.5 0 01.437-.743h.753a3.42 3.42 0 00-5.775-2.156.31.31 0 01-.487-.074l-.465-.837a.31.31 0 01.068-.385 4.957 4.957 0 013.252-1.211zM2 8.736c0 2.575 4.176 4.663 9.326 4.663.268 0 .435.308.302.54-.27.47-.479.979-.619 1.516-.15.577-.645 1.038-1.24.988C5.36 16.073 2 14.155 2 11.845V8.736zM11.326 2c2.398 0 4.619.423 6.279 1.15.828.362 1.563.82 2.106 1.381.547.567.942 1.289.942 2.132 0 .844-.395 1.566-.942 2.132-.543.561-1.278 1.02-2.106 1.383-1.66.726-3.881 1.148-6.279 1.148-2.397 0-4.618-.422-6.277-1.148-.828-.363-1.564-.822-2.107-1.383C2.395 8.229 2 7.507 2 6.663c0-.843.395-1.565.942-2.132.543-.561 1.279-1.02 2.107-1.382C6.709 2.423 8.929 2 11.326 2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1906_214">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

DataupgradeFill.propTypes = {
  color: PropTypes.string
};

export default DataupgradeFill;
