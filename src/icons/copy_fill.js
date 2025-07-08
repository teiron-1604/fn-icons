import React from 'react';
import PropTypes from 'prop-types';

const CopyFill = props => {
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
      <g clipPath="url(#clip0_867_106)">
        <path d="M20.094 1.5A2.406 2.406 0 0122.5 3.906v12.188a2.406 2.406 0 01-2.406 2.406H18.5v1.594a2.406 2.406 0 01-2.406 2.406H3.906A2.406 2.406 0 011.5 20.094V7.906A2.406 2.406 0 013.906 5.5H5.5V3.906A2.406 2.406 0 017.906 1.5h12.188zm-12.188 2a.406.406 0 00-.406.406V5.5h8.594A2.406 2.406 0 0118.5 7.906V16.5h1.594a.406.406 0 00.406-.406V3.906a.406.406 0 00-.406-.406H7.906z"></path>
      </g>
      <defs>
        <clipPath id="clip0_867_106">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CopyFill.propTypes = {
  color: PropTypes.string
};

export default CopyFill;
