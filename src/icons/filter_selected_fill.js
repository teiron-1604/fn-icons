import React from 'react';
import PropTypes from 'prop-types';

const FilterSelectedFill = props => {
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
        d="M19 5V3H1v2h1l6 9v7h4v-.185A7.803 7.803 0 0115.993 8.01L18 5h1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4 9a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm2.525 5.524a.6.6 0 10-.849-.848l-2.575 2.575-1.076-1.075a.6.6 0 10-.849.848l1.5 1.5a.6.6 0 00.849 0l3-3z"
      ></path>
    </svg>
  );
};

FilterSelectedFill.propTypes = {
  color: PropTypes.string
};

export default FilterSelectedFill;
