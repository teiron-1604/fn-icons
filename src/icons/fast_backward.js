import React from 'react';
import PropTypes from 'prop-types';

const FastBackward = props => {
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
        d="M22.44 4.102a1 1 0 00-1.054.109l-9 7a1 1 0 000 1.578l9 7A1 1 0 0023 19V5a1 1 0 00-.56-.898zm-11 0a1 1 0 00-1.054.109l-9 7a1 1 0 000 1.578l9 7A1 1 0 0012 19V5a1 1 0 00-.56-.898zM21 7.045v9.91L14.629 12 21 7.045zm-11 0v9.91L3.629 12 10 7.045z"
      ></path>
    </svg>
  );
};

FastBackward.propTypes = {
  color: PropTypes.string
};

export default FastBackward;
