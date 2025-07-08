import React from 'react';
import PropTypes from 'prop-types';

const Stop = props => {
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
      <g clipPath="url(#clip0_18_15414)">
        <path d="M20 12c0-3.607-.475-5.461-1.507-6.493S15.607 4 12 4s-5.461.475-6.493 1.507S4 8.393 4 12s.475 5.461 1.507 6.493S8.393 20 12 20s5.461-.475 6.493-1.507S20 15.607 20 12zm2 0c0 3.593-.425 6.24-2.093 7.907C18.24 21.575 15.593 22 12 22s-6.24-.425-7.907-2.093C2.425 18.24 2 15.593 2 12s.425-6.24 2.093-7.907C5.76 2.425 8.407 2 12 2s6.24.425 7.907 2.093C21.575 5.76 22 8.407 22 12z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15414">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Stop.propTypes = {
  color: PropTypes.string
};

export default Stop;
