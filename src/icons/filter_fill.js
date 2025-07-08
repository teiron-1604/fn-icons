import React from 'react';
import PropTypes from 'prop-types';

const FilterFill = props => {
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
      <path d="M21.146 2.006a2 2 0 011.336 3.334l-7.224 7.99A1 1 0 0015 14v7l-.004.127a2 2 0 01-2.775 1.716l-.116-.054-2-1a2.002 2.002 0 01-1.1-1.65L9 20v-6a1 1 0 00-.2-.599l-.06-.07-7.225-7.99V5.34A2.001 2.001 0 013 2h18.003l.144.006z"></path>
    </svg>
  );
};

FilterFill.propTypes = {
  color: PropTypes.string
};

export default FilterFill;
