import React from 'react';
import PropTypes from 'prop-types';

const PictureInPictureInFill = props => {
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
      <g clipPath="url(#clip0_18_15367)">
        <path d="M10 12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h6z"></path>
        <path d="M19 2a3 3 0 013 3v14a3 3 0 01-3 3h-3.983a1 1 0 010-2H19a1 1 0 001-1V5.555l-3.143 3.142L18.4 10.24a.34.34 0 01-.24.58h-3.838a1 1 0 01-1-1V5.98a.34.34 0 01.58-.24l1.542 1.543L18.727 4H5a1 1 0 00-1 1v4a1 1 0 01-2 0V5a3 3 0 013-3h14z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15367">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

PictureInPictureInFill.propTypes = {
  color: PropTypes.string
};

export default PictureInPictureInFill;
