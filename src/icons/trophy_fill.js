import React from 'react';
import PropTypes from 'prop-types';

const TrophyFill = props => {
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
      <path d="M13 16.938V19h5v2H6v-2h5v-2.062A8 8 0 014 9V3h16v6a8 8 0 01-7 7.938zM1 5h2v4H1V5zm20 0h2v4h-2V5z"></path>
    </svg>
  );
};

TrophyFill.propTypes = {
  color: PropTypes.string
};

export default TrophyFill;
