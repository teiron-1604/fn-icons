import React from 'react';
import PropTypes from 'prop-types';

const CaretRightFilled = props => {
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
      <path d="M21.226 11.313a1 1 0 010 1.375l-9 9.5a1 1 0 01-1.726-.687v-5h-8a1 1 0 01-1-1v-7l.005-.103a1 1 0 01.995-.897h8v-5l.012-.152a1 1 0 011.714-.536l9 9.5z"></path>
    </svg>
  );
};

CaretRightFilled.propTypes = {
  color: PropTypes.string
};

export default CaretRightFilled;
