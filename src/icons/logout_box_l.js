import React from 'react';
import PropTypes from 'prop-types';

const LogoutBoxL = props => {
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
      <path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"></path>
    </svg>
  );
};

LogoutBoxL.propTypes = {
  color: PropTypes.string
};

export default LogoutBoxL;
