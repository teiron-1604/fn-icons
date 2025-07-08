import React from 'react';
import PropTypes from 'prop-types';

const Device2Fill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.222 9H21V3.007A.998.998 0 0020.008 2H1.992C1.455 2 1 2.451 1 3.007v12.986A.998.998 0 001.992 17H10v2H6v2h6.004a.962.962 0 01-.004-.083V10.083c0-.287.129-.563.358-.766.23-.203.54-.317.864-.317zM22 11h-7a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V12a1 1 0 00-1-1z"
      ></path>
    </svg>
  );
};

Device2Fill.propTypes = {
  color: PropTypes.string
};

export default Device2Fill;
