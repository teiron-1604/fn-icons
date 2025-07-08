import React from 'react';
import PropTypes from 'prop-types';

const AutoPlay = props => {
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
      <path d="M19 5a3 3 0 013 3v12a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h14zM5 7a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V8a1 1 0 00-1-1H5zm4.528 2.118a1 1 0 011.027.05l6 4a1 1 0 010 1.664l-6 4A1 1 0 019 18v-8l.01-.137a1 1 0 01.518-.745zM11 16.131L14.197 14 11 11.868v4.263zM17 1a1 1 0 110 2H7a1 1 0 010-2h10z"></path>
    </svg>
  );
};

AutoPlay.propTypes = {
  color: PropTypes.string
};

export default AutoPlay;
