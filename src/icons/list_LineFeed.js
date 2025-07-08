import React from 'react';
import PropTypes from 'prop-types';

const ListLineFeed = props => {
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
      <path d="M3.5 20V4h2v16h-2z"></path>
      <path d="M18.5 20V4h2v16h-2z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.7 12a3.9 3.9 0 013.9-3.9h4v1.8h-4a2.1 2.1 0 000 4.2h4v1.8h-4A3.9 3.9 0 017.7 12z"
      ></path>
      <path d="M14.774 13.734l1.316 1.357-1.316 1.247v-2.604z"></path>
    </svg>
  );
};

ListLineFeed.propTypes = {
  color: PropTypes.string
};

export default ListLineFeed;
