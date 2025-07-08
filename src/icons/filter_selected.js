import React from 'react';
import PropTypes from 'prop-types';

const FilterSelected = props => {
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
        d="M18.602 4.8v-2h-18v2h1l5 7.5v8.5h4.386a7.806 7.806 0 01-1.302-2H8.602v-7.106L4.006 4.8h11.192l-3.005 4.506a7.76 7.76 0 013.34-1.404L17.602 4.8h1z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4 9a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm2.525 5.524a.6.6 0 10-.849-.848l-2.575 2.575-1.076-1.075a.6.6 0 10-.849.848l1.5 1.5a.6.6 0 00.849 0l3-3z"
      ></path>
    </svg>
  );
};

FilterSelected.propTypes = {
  color: PropTypes.string
};

export default FilterSelected;
