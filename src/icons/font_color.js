import React from 'react';
import PropTypes from 'prop-types';

const FontColor = props => {
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
      <g clipPath="url(#clip0_18_14285)">
        <path d="M20 19a1 1 0 110 2H4a1 1 0 110-2h16zM12 3a1 1 0 01.895.553l6 12 .04.093a1 1 0 01-1.779.89l-.05-.089L15.381 13H8.618l-1.723 3.447a1 1 0 01-1.79-.894l6-12 .072-.121A1 1 0 0112 3zm-2.382 8h4.764L12 6.236 9.618 11z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_14285">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FontColor.propTypes = {
  color: PropTypes.string
};

export default FontColor;
