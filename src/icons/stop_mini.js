import React from 'react';
import PropTypes from 'prop-types';

const StopMini = props => {
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
      <g clipPath="url(#clip0_18_15402)">
        <path d="M17 12c0-2.407-.325-3.51-.907-4.093C15.51 7.325 14.407 7 12 7s-3.51.325-4.093.907C7.325 8.49 7 9.593 7 12s.325 3.51.907 4.093C8.49 16.675 9.593 17 12 17s3.51-.325 4.093-.907C16.675 15.51 17 14.407 17 12zm2 0c0 2.393-.275 4.289-1.493 5.507S14.393 19 12 19s-4.289-.275-5.507-1.493S5 14.393 5 12s.275-4.289 1.493-5.507S9.607 5 12 5s4.289.275 5.507 1.493S19 9.607 19 12z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15402">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

StopMini.propTypes = {
  color: PropTypes.string
};

export default StopMini;
