import React from 'react';
import PropTypes from 'prop-types';

const Grid2 = props => {
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
        d="M11 3H3v8h8V3zM5 9V5h4v4H5z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 13H3v8h8v-8zm-6 6v-4h4v4H5z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 3h-8v8h8V3zm-6 6V5h4v4h-4z"
      ></path>
      <path d="M14.608 20.806H13v-1.22l4.591-4.592h-4.603v-2h8.018v7.813h-2v-4.399l-4.398 4.398z"></path>
    </svg>
  );
};

Grid2.propTypes = {
  color: PropTypes.string
};

export default Grid2;
