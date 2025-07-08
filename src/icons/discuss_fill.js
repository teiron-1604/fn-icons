import React from 'react';
import PropTypes from 'prop-types';

const DiscussFill = props => {
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
      <path d="M16.8 19L14 22.5 11.2 19H6a1 1 0 01-1-1V7.103a1 1 0 011-1h16a1 1 0 011 1V18a1 1 0 01-1 1h-5.2zM2 2h17v2H3v11H1V3a1 1 0 011-1z"></path>
    </svg>
  );
};

DiscussFill.propTypes = {
  color: PropTypes.string
};

export default DiscussFill;
