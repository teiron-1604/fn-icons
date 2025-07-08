import React from 'react';
import PropTypes from 'prop-types';

const GalleryAdd = props => {
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
      <g clipPath="url(#clip0_932_140)">
        <path d="M21 11a1 1 0 011 1v7.5a2.5 2.5 0 01-2.5 2.5H6a1 1 0 110-2h13.5a.5.5 0 00.5-.5V12a1 1 0 011-1zm-7.607-9a1 1 0 010 2H4v6.273L6.164 8.35l.148-.12a2 2 0 012.525.134l2.087 1.897 1.828-1.523.138-.104a2 2 0 012.342.04L18.6 11.2l.09.075A1 1 0 0119 12v5a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h9.393zM4 12.948V17h13v-4.501l-2.968-2.225-1.614 1.345 1.255 1.14.072.074a1 1 0 01-1.339 1.472l-.079-.065-4.835-4.395L4 12.948zM20 1a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V6h-2a1 1 0 110-2h2V2a1 1 0 011-1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_932_140">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

GalleryAdd.propTypes = {
  color: PropTypes.string
};

export default GalleryAdd;
