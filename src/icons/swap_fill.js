import React from 'react';
import PropTypes from 'prop-types';

const SwapFill = props => {
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
      <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11.5 4.5a1 1 0 001.707.707l3.5-3.5.068-.076a1 1 0 00-1.406-1.406l-.076.068-1.793 1.793V7.5a1 1 0 10-2 0v9zm-6.275-6.13a1 1 0 001.406 1.405l.076-.068L9.5 9.914V16.5a1 1 0 102 0v-9a1 1 0 00-1.707-.707l-3.5 3.5-.068.076z"></path>
    </svg>
  );
};

SwapFill.propTypes = {
  color: PropTypes.string
};

export default SwapFill;
