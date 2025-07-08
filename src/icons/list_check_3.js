import React from 'react';
import PropTypes from 'prop-types';

const ListCheck3 = props => {
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
      <path d="M8 6v3H5V6h3zM3 4v7h7V4H3zm10 0h8v2h-8V4zm0 7h8v2h-8v-2zm0 7h8v2h-8v-2zm-2.293-1.793l-1.414-1.414L6 18.086l-1.793-1.793-1.414 1.414L6 20.914l4.707-4.707z"></path>
    </svg>
  );
};

ListCheck3.propTypes = {
  color: PropTypes.string
};

export default ListCheck3;
