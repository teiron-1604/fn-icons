import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropDown = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 14.707a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L12 12.586l2.793-2.793a1 1 0 111.414 1.414l-3.5 3.5z"
      ></path>
    </svg>
  );
};

ArrowDropDown.propTypes = {
  color: PropTypes.string
};

export default ArrowDropDown;
