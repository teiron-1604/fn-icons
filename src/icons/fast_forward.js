import React from 'react';
import PropTypes from 'prop-types';

const FastForward = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.56 4.102a1 1 0 011.054.109l9 7a1 1 0 010 1.578l-9 7A1 1 0 011 19V5a1 1 0 01.56-.898zm11 0a1 1 0 011.054.109l9 7a1 1 0 010 1.578l-9 7A1 1 0 0112 19V5a1 1 0 01.56-.898zM3 7.045v9.91L9.371 12 3 7.045zm11 0v9.91L20.371 12 14 7.045z"
      ></path>
    </svg>
  );
};

FastForward.propTypes = {
  color: PropTypes.string
};

export default FastForward;
