import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpCircle = props => {
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
      <path d="M21 12a9 9 0 10-18 0 9 9 0 0018 0zm-10 4.75v-6.586l-2.793 2.793a1 1 0 11-1.414-1.414l4.5-4.5.076-.068a1 1 0 011.338.068l4.5 4.5.068.076a1 1 0 01-1.406 1.406l-.076-.068L13 10.164v6.586a1 1 0 11-2 0zM23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z"></path>
    </svg>
  );
};

ArrowUpCircle.propTypes = {
  color: PropTypes.string
};

export default ArrowUpCircle;
