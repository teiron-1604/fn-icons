import React from 'react';
import PropTypes from 'prop-types';

const Play = props => {
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
      <path d="M5.52 2.122c.322-.175.713-.16 1.021.037l14 9a1 1 0 010 1.682l-14 9A1.001 1.001 0 015 21V3l.009-.136a1 1 0 01.512-.742zM7 19.168L18.15 12 7 4.831v14.337z"></path>
    </svg>
  );
};

Play.propTypes = {
  color: PropTypes.string
};

export default Play;
