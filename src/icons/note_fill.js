import React from 'react';
import PropTypes from 'prop-types';

const NoteFill = props => {
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
      <path d="M22 16a4 4 0 11-2-3.464V4.18L10 5.847V18a4 4 0 11-2-3.464V5a1 1 0 01.836-.986l12-2A1 1 0 0122 3v13z"></path>
    </svg>
  );
};

NoteFill.propTypes = {
  color: PropTypes.string
};

export default NoteFill;
