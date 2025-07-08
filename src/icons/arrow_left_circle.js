import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftCircle = props => {
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
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm4.75 10h-6.586l2.793 2.793a1 1 0 11-1.414 1.414l-4.5-4.5-.068-.076a1 1 0 01.068-1.338l4.5-4.5.076-.068a1 1 0 011.406 1.406l-.068.076L10.164 11h6.586a1 1 0 110 2zM12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z"></path>
    </svg>
  );
};

ArrowLeftCircle.propTypes = {
  color: PropTypes.string
};

export default ArrowLeftCircle;
