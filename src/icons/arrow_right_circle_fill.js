import React from 'react';
import PropTypes from 'prop-types';

const ArrowRightCircleFill = props => {
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
      <path d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-6.043.707a1 1 0 00.068-1.338l-.068-.076-4.5-4.5a1 1 0 10-1.414 1.414L13.836 11H7.25a1 1 0 100 2h6.586l-2.793 2.793-.068.076a1 1 0 001.406 1.406l.076-.068 4.5-4.5z"></path>
    </svg>
  );
};

ArrowRightCircleFill.propTypes = {
  color: PropTypes.string
};

export default ArrowRightCircleFill;
