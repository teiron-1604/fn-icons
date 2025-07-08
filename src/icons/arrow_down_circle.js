import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownCircle = props => {
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
      <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm10-4.75v6.586l2.793-2.793a1 1 0 111.414 1.414l-4.5 4.5-.076.068a1 1 0 01-1.338-.068l-4.5-4.5-.068-.076a1 1 0 011.406-1.406l.076.068L11 13.836V7.25a1 1 0 112 0zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
    </svg>
  );
};

ArrowDownCircle.propTypes = {
  color: PropTypes.string
};

export default ArrowDownCircle;
