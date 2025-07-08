import React from 'react';
import PropTypes from 'prop-types';

const StopFilled = props => {
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
      <path d="M12 2c3.593 0 6.24.425 7.907 2.093C21.575 5.76 22 8.407 22 12s-.425 6.24-2.093 7.907C18.24 21.575 15.593 22 12 22s-6.24-.425-7.907-2.093C2.425 18.24 2 15.593 2 12s.425-6.24 2.093-7.907C5.76 2.425 8.407 2 12 2z"></path>
    </svg>
  );
};

StopFilled.propTypes = {
  color: PropTypes.string
};

export default StopFilled;
