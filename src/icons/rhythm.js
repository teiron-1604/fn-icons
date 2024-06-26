import React from 'react';
import PropTypes from 'prop-types';

const Rhythm = props => {
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
      <g clipPath="url(#clip0_18_15587)">
        <path d="M2 9h2v12H2V9zm6-6h2v18H8V3zm6 9h2v9h-2v-9zm6-6h2v15h-2V6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15587">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Rhythm.propTypes = {
  color: PropTypes.string
};

Rhythm.defaultProps = {
  color: 'currentColor'
};

export default Rhythm;
