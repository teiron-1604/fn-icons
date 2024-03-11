import React from 'react';
import PropTypes from 'prop-types';

const EmotionNormalFill = props => {
  const { color, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_13700)">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4-8v2h8v-2H8zm0-3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_13700">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

EmotionNormalFill.propTypes = {
  color: PropTypes.string
};

EmotionNormalFill.defaultProps = {
  color: 'currentColor'
};

export default EmotionNormalFill;
