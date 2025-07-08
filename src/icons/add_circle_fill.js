import React from 'react';
import PropTypes from 'prop-types';

const AddCircleFill = props => {
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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11 5a1 1 0 01-1-1v-3H8a1 1 0 110-2h3V8a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 01-1 1z"
        opacity=".9"
      ></path>
    </svg>
  );
};

AddCircleFill.propTypes = {
  color: PropTypes.string
};

export default AddCircleFill;
