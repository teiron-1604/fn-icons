import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
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
        d="M11 4a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1116.032 5.618l3.675 3.675a1 1 0 01-1.414 1.414l-3.675-3.675A9 9 0 012 11z"
      ></path>
    </svg>
  );
};

Search.propTypes = {
  color: PropTypes.string
};

export default Search;
