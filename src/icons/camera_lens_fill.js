import React from 'react';
import PropTypes from 'prop-types';

const CameraLensFill = props => {
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
      <g clipPath="url(#clip0_18_15829)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.113 1.195A.13.13 0 0012 1C8.92 1 6.137 2.265 4.14 4.305a.486.486 0 00-.067.586l2.593 4.415a.5.5 0 00.866-.007l4.58-8.104zM3.01 7.031c-.192-.327-.66-.328-.831.01A10.954 10.954 0 001 12c0 .908.11 1.79.317 2.634a.485.485 0 00.475.366h5.025a.5.5 0 00.431-.753L3.01 7.03zM3.017 17c-.374 0-.613.394-.419.713a11.028 11.028 0 006.131 4.793.485.485 0 00.56-.222l2.677-4.53a.5.5 0 00-.43-.754H3.017zm8.593 5.288c-.185.314.025.712.39.712 3.024 0 5.763-1.22 7.751-3.195a.486.486 0 00.068-.597l-2.8-4.624a.5.5 0 00-.859.005l-4.55 7.699zm9.296-5.146c.193.318.652.32.826-.01A10.952 10.952 0 0023 12c0-.887-.105-1.749-.303-2.575a.485.485 0 00-.473-.368l-5.34-.024a.5.5 0 00-.43.76l4.452 7.349zm.529-10.801c.192.32-.049.712-.422.71l-9.035-.04a.5.5 0 01-.434-.746l2.65-4.686a.486.486 0 01.54-.236 11.02 11.02 0 016.7 4.998z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15829">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CameraLensFill.propTypes = {
  color: PropTypes.string
};

export default CameraLensFill;
