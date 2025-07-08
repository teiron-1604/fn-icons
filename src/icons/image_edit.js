import React from 'react';
import PropTypes from 'prop-types';

const ImageEdit = props => {
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
      <g clipPath="url(#clip0_18_15225)">
        <path d="M12.5 2a1 1 0 110 2H5a1 1 0 00-1 1v8.317l3.164-2.812.148-.12a2 2 0 012.526.136l2.086 1.895 1.828-1.522.138-.105a1.998 1.998 0 012.327.031v-.002L20 13.545V11.5a1 1 0 112 0V19a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h7.5zM4.664 15.402a.994.994 0 01-.664.251V19a1 1 0 001 1h14a1 1 0 001-1v-2.988l-4.952-3.57-.016-.012-1.614 1.344 1.255 1.141.072.073a1 1 0 01-1.339 1.472l-.079-.065L8.492 12l-3.828 3.402zM20.293 2.293a1 1 0 111.414 1.414l-5 5a1 1 0 11-1.414-1.414l5-5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15225">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ImageEdit.propTypes = {
  color: PropTypes.string
};

export default ImageEdit;
