import React from 'react';
import PropTypes from 'prop-types';

const AutoPlayFill = props => {
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
      <path d="M19 5a3 3 0 013 3v12a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h14zm-8.445 4.168a1 1 0 00-1.545.695L9 10v8a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4zM17 1a1 1 0 110 2H7a1 1 0 010-2h10z"></path>
    </svg>
  );
};

AutoPlayFill.propTypes = {
  color: PropTypes.string
};

export default AutoPlayFill;
